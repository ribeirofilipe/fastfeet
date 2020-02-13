import { Op } from 'sequelize';

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

  async deliveries(req, res) {
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

  async update(req, res) {
    const { id, deliveryman_id } = req.params;
    const { start_date, end_date } = req.body;
    const { originalname: name, filename: path } = req.file;

    const orders = await Order.findAll({ where: { deliveryman_id }});

    const firstHourToday = new Date().setHours(0, 0, 0, 0)

    const totalOrdersDeliveredToday = orders.filter(order =>
      order.start_date >= firstHourToday && order.end_date).length;

    if (totalOrdersDeliveredToday > 5) {
      return res.status(400).json({ error: '5 Deliveries day limit hit'})
    };

    const order = orders.filter(_order => _order.id === id);

    if (!order.start_date && end_date) {
      return res.status(400).json({ error: 'Delivery is not started'});
    };

    const { fileId } = await File.create({
      name,
      path
    });

    await order.update({
      start_date,
      end_date,
      signature_id: fileId
    });

    return res.status(200);
  }
}

export default new DeliveryController();
