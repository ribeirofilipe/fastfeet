import { Op } from 'sequelize';
import { isBefore, parseISO } from 'date-fns';
import Delivery from '../models/Delivery';

class DeliveryProgressController {
  async deliveried(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required.'})
    }

    const orders = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        end_date: {
          [Op.ne]: null,
        },
        canceled_at: null
      }
    });

    return res.json(orders);
  }

  async startOrder(req, res) {
    const { id, deliveryman_id } = req.params;
    const start_date = new Date();

    if (!start_date) {
      return res.status(400).json({ error: 'start_date is required!'});
    };

    const orders = await Delivery.findAll({ where: { deliveryman_id }});

    if (!orders) {
      return res.status(404).json({ error: 'Deliveryman does not has delivery to start!'})
    };

    const order = orders.filter(_order => _order.id === Number(id))[0];

    if (order.start_date) {
      return res.status(400).json({ error: 'Order is already in progress!'});
    };

    const firstHourToday = new Date().setHours(0, 0, 0, 0)

    const totalOrdersDeliveredToday = orders.filter(filter =>
      filter.start_date >= firstHourToday && filter.end_date).length;

    if (totalOrdersDeliveredToday > 5) {
      return res.status(400).json({ error: '5 Orders day limit hit'})
    };

    order.start_date = start_date;

    await Delivery.update({ start_date }, { where: { id } });

    return res.json(order);
  }

  async finishOrder(req, res) {
    const { id, deliveryman_id } = req.params;
    const { signature_id } = req.body;

    const end_date = new Date();

    let order = await Delivery.findOne({ where: { id }});

    if (order.deliveryman_id !== Number(deliveryman_id)) {
      return res.status(400).json({ error: 'This order belongs to other deliveryman!'});
    }

    if (!order) {
      return res.status(400).json({ error: 'Order not found!'});
    };

    if (!order.start_date) {
      return res.status(400).json({ error: 'Order has not started!'})
    };

    if(isBefore(parseISO(end_date), order.start_date)) {
      return res.status(400).json({ error: 'end_date must be greather than start_date'});
    };

    if (order.end_date) {
      return res.status(400).json({ error: 'Order has delivered!'});
    };

    order = await order.update({ end_date, signature_id }, { where: { id } });

    return res.json(order);
  }

}

export default new DeliveryProgressController();
