import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async store(req, res) {
    console.log(req.file);
    console.log(req.body);
    const { originalname: name, filename: path } = req.file;

    let deliveryman = await Deliveryman.findOne({ where: { email: req.body.email }});

    const { id } = await File.create({
      name,
      path
    });

    if (deliveryman) {
      return res.status(400).json({ error: 'Deliveryman already exists.'});
    };

    deliveryman = await Deliveryman.create({
      name: req.body.name,
      email: req.body.email,
      avatar_id: id
    });

    return res.json({
      name: deliveryman.name,
      email: deliveryman.email
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
    const { name } = req.query;

    const query = name ? {
      name : {
        [Op.iLike]: `${name}%`,
      }
    } : null;

    const deliverymans = await Deliveryman.findAll({
      where: query,
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
