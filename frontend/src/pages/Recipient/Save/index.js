import React, { useMemo, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SaveContainer from '~/components/SaveContainer';

import { Form, Row, InputDiv, Input } from '~/components/Form/styles';

import {
  getRecipientRequest,
  updateRecipientRequest,
  saveRecipientRequest,
} from '~/store/modules/recipient/actions';

export default function RecipientSave({ location }) {
  const dispatch = useDispatch();

  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal_code, setPostalCode] = useState('');

  const id = location.state;

  const recipient = useSelector(selector => selector.recipient.recipient);

  useMemo(() => {
    setCpf(recipient.cpf);
    setName(recipient.name);
    setStreet(recipient.street);
    setNumber(recipient.number);
    setCity(recipient.city);
    setState(recipient.state);
    setPostalCode(recipient.postal_code);
  }, [recipient]);

  useEffect(() => {
    if (id) {
      dispatch(getRecipientRequest(id));
    } else {
      setCpf('');
      setName('');
      setStreet('');
      setNumber('');
      setCity('');
      setState('');
      setPostalCode('');
    }

    // eslint-disable-next-line
  }, [id]);

  function handleSubmit() {
    const obj = {
      cpf,
      name,
      street,
      number,
      city,
      state,
      postal_code,
    };

    return id
      ? dispatch(updateRecipientRequest(obj))
      : dispatch(saveRecipientRequest(obj));
  }

  return (
    <>
      <SaveContainer
        route={'recipient'}
        title={id ? 'Edição de destinatário' : 'Cadastro de destinatário'}
        action={() => handleSubmit()}
      />
      <Form>
        <Row>
          <InputDiv width={66}>
            <label>Nome</label>
            <Input
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </InputDiv>
          <InputDiv width={33}>
            <label>CPF</label>
            <Input
              disabled={!!id}
              mask="999.999.999-99"
              type="text"
              onChange={e => setCpf(e.target.value)}
              value={cpf}
            />
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label>Rua</label>
            <Input
              type="text"
              onChange={e => setStreet(e.target.value)}
              value={street}
            />
          </InputDiv>
          <InputDiv width={33}>
            <label>Número</label>
            <Input
              type="number"
              onChange={e => setNumber(e.target.value)}
              value={number}
            />
          </InputDiv>
          <InputDiv width={33}>
            <label>Complemento</label>
            <Input type="text" />
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label>Cidade</label>
            <Input
              type="text"
              onChange={e => setCity(e.target.value)}
              value={city}
            />
          </InputDiv>
          <InputDiv>
            <label>Estado</label>
            <Input
              mask="aa"
              type="text"
              onChange={e => setState(e.target.value)}
              value={state}
            />
          </InputDiv>
          <InputDiv>
            <label>CEP</label>
            <Input
              mask="99999-999"
              onChange={e => setPostalCode(e.target.value)}
              value={postal_code}
            />
          </InputDiv>
        </Row>
      </Form>
    </>
  );
}

RecipientSave.propTypes = {
  location: PropTypes.object,
};
