import { Op } from 'sequelize';
import { isBefore, parseISO } from 'date-fns';
import Order from '../models/Order';
import File from '../models/File';

class DeliveryController {
  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required.'})
    }

    const orders = await Order.findAll({
      where: {
        deliveryman_id: id,
        end_date: null,
        canceled_at: null
      }
    });

    return res.json(orders);
  }

  async index(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required.'})
    }

    const orders = await Order.findAll({
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
    const { start_date } = req.body;

    if (!start_date) {
      return res.status(400).json({ error: 'start_date is required!'});
    };

    const orders = await Order.findAll({ where: { deliveryman_id }});

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

    await Order.update({ start_date }, { where: { id } });

    return res.json(order);
  }

  async finishOrder(req, res) {
    const { id, deliveryman_id } = req.params;
    const { end_date } = req.query;
    const { originalname: name, filename: path } = req.file;

    let order = await Order.findOne({ where: { id }});

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

    const { id: fileId } = await File.create({
      name,
      path
    });

    order = await Order.update({ end_date, signature_id: fileId }, { where: { id } });

    return res.json({
      data: order,
      file: {
        name,
        path
      }
    });
  }
}

export default new DeliveryController();
