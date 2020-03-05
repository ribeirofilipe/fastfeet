import { Op } from 'sequelize';
import Recipient from '../models/Recipient';
import File from '../models/File';

class RecipientController {
  async store(req, res) {
    const { cpf } = req.body;

    const checkRecipient = await Recipient.findOne({ where : { cpf }});

    if (checkRecipient) {
      return res.status(400).json({error: 'Recipient already exists!'})
    };

    const { name, number, street, state, city, postal_code } = await Recipient.create(req.body);

    return res.json({
      cpf,
      name,
      street,
      number,
      state,
      city,
      postal_code
    });
  }

  async update(req, res) {
    const { cpf } = req.params;

    if (!cpf) {
      return res.status(400).json({ error: 'CPF is required' });
    }

    const recipient = await Recipient.findOne({ where : { cpf }});

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found!' })
    };

    const { name, number, street, state, city, postal_code } = await recipient.update(req.body);

    return res.json({
      cpf,
      name,
      street,
      number,
      state,
      city,
      postal_code
    });
  }

  async index(req, res) {
    const { name } = req.query;

    const query = name ? {
      name : {
        [Op.iLike]: `${name}%`,
      }
    } : null;

    const recipients = await Recipient.findAll({
      where: query,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(recipients);
  }
}

export default new RecipientController();
