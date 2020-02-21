import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';
import { Container } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('e-mail inválido.')
      .required('e-mail obrigatório.'),
    password: Yup.string().required('senha obrigatória'),
  });

  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="FASTFEED" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <span>E-MAIL</span>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <span>SUA SENHA</span>
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
