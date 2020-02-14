import DeliveryProblem from '../models/DeliveryProblem';
import Order from '../models/Order';

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
    const { id: order_id } = req.params;

    const order = await Order.findOne({ where: { id: order_id }});

    if (!order) {
      return res.status(404).json({ error: 'Order not found!'})
    };

    order.canceled_at = new Date();

    await order.update(order);

    return res.status(200);
  }
}

export default new DeliveryProblemController();
