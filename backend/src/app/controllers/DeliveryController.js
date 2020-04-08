import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

class DeliveryController {
  async store(req, res) {
    const { deliveryman_id, recipient_id } = req.body;

    const deliveryman = await Deliveryman.findOne({ where : { id: deliveryman_id }});

    if (!deliveryman) return res.json({ error: 'Deliveryman not found.'});

    const recipient = await Recipient.findOne({ where : { id: recipient_id }});

    if (!recipient) return res.json({ error: 'Recipient not found.'});


    const order = await Delivery.create(req.body);

    return res.json(order);
  }

  async update(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required'});
    }

    const order = await Delivery.findOne({ where: { id }});

    if (!order) {
      return res.status(400).json({ error: 'Order not found.'});
    };

    await order.update(req.body);

    return res.json(order);
  }


  async index(req, res) {
    const { product } = req.query;

    const query = product ?
    {
        product : {
          [Op.iLike]: `${product}%`,
        }
    } : null;

    const orders = await Delivery.findAll({
      where: query,
      include: [{
        model: Deliveryman,
        as: 'deliveryman',
        attributes: ['name'],
      },
      {
        model: Recipient,
        as: 'recipient',
        attributes: ['name', 'number', 'state', 'city', 'postal_code', 'street'],
      }]
    });

    return res.json(orders);
  }

  async deliveries(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required.'})
    }

    const orders = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        end_date: null,
        canceled_at: null
      },
      include: [{
        model: Recipient,
        as: 'recipient',
        attributes: ['name', 'number', 'state', 'city', 'postal_code', 'street'],
      }]
    });

    return res.json(orders);
  }

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
      },
      include: [{
        model: Recipient,
        as: 'recipient',
        attributes: ['name', 'number', 'state', 'city', 'postal_code', 'street'],
      }]
    });

    return res.json(orders);
  }

  async destroy(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required'});
    }

    const order = await Delivery.findOne({ where: { id }});

    if (!order) {
      return res.status(400).json({ error: 'Order not found.'});
    };

    await Delivery.destroy({ where: { id }});

    return res.sendStatus(204);
  }
}

export default new DeliveryController();
