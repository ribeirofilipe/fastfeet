import React from 'react';

import SaveContainer from '~/components/SaveContainer';

import { Form, Row, InputDiv, Input } from '~/components/Form/styles';

export default function RecipientSave() {
  return (
    <>
      <SaveContainer route={'recipient'} title={'Cadastro de destinatário'} />
      <Form>
        <Row>
          <InputDiv>
            <label>Nome</label>
            <Input type="text" />
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label>Rua</label>
            <Input type="text" />
          </InputDiv>
          <InputDiv width={33}>
            <label>Número</label>
            <Input type="number" />
          </InputDiv>
          <InputDiv width={33}>
            <label>Complemento</label>
            <Input type="text" />
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label>Cidade</label>
            <Input type="text" />
          </InputDiv>
          <InputDiv>
            <label>Estado</label>
            <Input type="text" />
          </InputDiv>
          <InputDiv>
            <label>CEP</label>
            <Input type="text" />
          </InputDiv>
        </Row>
      </Form>
    </>
  );
}
