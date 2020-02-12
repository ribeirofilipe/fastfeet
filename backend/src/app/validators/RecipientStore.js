import * as Yup from 'yup';

export default async(req, res, next) => {
  try {
    const schema = Yup.object().shape({
      cpf: Yup.string().when('name', (name, field) =>
        name ? field.required().oneOf([Yup.ref('name')]) : field
      ),
      name: Yup.string()
        .min(3)
        .required(),
      street: Yup.string()
        .required(),
      number: Yup.string()
        .required(),
      state: Yup.string()
        .required(),
      city: Yup.string()
        .required(),
      postal_code: Yup.string()
        .required()
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch(err) {
    return res
    .status(404)
    .send({ error: 'Validation fails', message: err.inner });
  }
};
