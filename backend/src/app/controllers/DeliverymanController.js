import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async store(req, res) {
    const deliveryman = await Deliveryman.findOne({ where: { email: req.body.email }});

    if (deliveryman) {
      return res.status(400).json({ error: 'Deliveryman already exists.'});
    };

    const { name, email } = await Deliveryman.create(req.body);

    return res.json({
      name,
      email
    });
  }

  async update(req, res) {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ error: 'email is required'});
    }

    const deliveryman = await Deliveryman.findOne({ where: { email },
      include: {
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url'],
      },
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found.'});
    };

    await deliveryman.update(req.body);

    return res.json({
      name: deliveryman.name,
      email,
      avatar: deliveryman.avatar.url
    });
  }

  async index(req, res) {
    const deliverymans = await Deliveryman.findAll({
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(deliverymans);
  }

  async destroy(req, res) {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ error: 'email is required'});
    }

    const deliveryman = await Deliveryman.findOne({ where: { email }});

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found.'});
    };

    await Deliveryman.destroy({ where: { email }});

    return res.sendStatus(204);
  }
}

export default new DeliverymanController();
