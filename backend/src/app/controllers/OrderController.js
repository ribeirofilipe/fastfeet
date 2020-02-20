import Order from '../models/Order';
import File from '../models/File';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import DeliveryProblem from '../models/DeliveryProblem';

class OrderController {
  async store(req, res) {
    const { deliveryman_id, recipient_id } = req.body;

    const deliveryman = await Deliveryman.findOne({ where : { id: deliveryman_id }});

    if (!deliveryman) return res.json({ error: 'Deliveryman not found.'});

    const recipient = await Recipient.findOne({ where : { id: recipient_id }});

    if (!recipient) return res.json({ error: 'Recipient not found.'});

    const order = await Order.create(req.body);

    return res.json(order);
  }

  async update(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required'});
    }

    const order = await Order.findOne({ where: { id }});

    if (!order) {
      return res.status(400).json({ error: 'Order not found.'});
    };

    await order.update(req.body);

    return res.json(order);
  }

  async index(req, res) {
    const orders = await Order.findAll({
      include: [
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['cpf', 'name'],
        },
      ],
    });

    return res.json(orders);
  }

  async destroy(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required'});
    }

    const order = await Order.findOne({ where: { id }});

    if (!order) {
      return res.status(400).json({ error: 'Order not found.'});
    };

    await Order.destroy({ where: { id }});

    return res.sendStatus(204);
  }
}

export default new OrderController();
