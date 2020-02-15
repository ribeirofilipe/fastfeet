import DeliveryProblem from '../models/DeliveryProblem';
import Queue from '../../lib/Queue';
import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import CancellationMail from '../jobs/CancellationMail';

class DeliveryProblemController {
  async index(req, res) {
    const deliveryProblems = await DeliveryProblem.findAll();

    return res.json(deliveryProblems);
  }

  async show(req, res) {
    const { id: order_id } = req.params;

    const deliveryProblems = await DeliveryProblem.findAll({
      where: {
        order_id
      },
    });

    return res.json(deliveryProblems);
  }

  async store(req, res) {
    const { id: order_id } = req.params;
    const { description } = req.body;

    const order = await Order.findOne({ where: { id: order_id }});

    if (!order) {
      return res.status(404).json({ error: 'Order not found!'})
    };

    const { id: deliveryProblemId } = await DeliveryProblem.create({
      description,
      order_id
    });

    return res.json({
      deliveryProblemId,
      description,
      order_id,
    });
  }

  async destroy(req, res) {
    const { id } = req.params;

    const order = await Order.findOne({ where: { id },
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name']
        }
      ],
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found!'})
    };

    const canceled_at = new Date();

    await order.update({ canceled_at });

    await Queue.add(CancellationMail.key, {
      order,
    });

    return res.sendStatus(200);
  }
}

export default new DeliveryProblemController();
