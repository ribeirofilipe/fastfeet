import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async show(req, res) {
    const { cpf } = req.params;

    const recipient = await Recipient.findOne({ where: { cpf }});

    if (!recipient) {
      return res.json({error: 'Recipient not found.'});
    }

    return res.json(recipient);
  }

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
    });

    return res.json(recipients);
  }

  async destroy(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required'});
    }

    const recipient = await Recipient.findOne({ where: { id }});

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient not found.'});
    };

    await Recipient.destroy({ where: { id }});

    return res.sendStatus(204);
  }
}

export default new RecipientController();
