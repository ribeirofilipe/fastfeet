import React from 'react';

import { Table } from '~/components/Table/styles';

import { Container } from './styles';

export default function Delivery() {
  return (
    <Table>
      <span>Gerenciando encomendas</span>
      <div>
        <input placeholder="Buscar por encomendas"></input>
        <button type="button">
          <span>+</span>
          <span>CADASTRAR</span>
        </button>
      </div>
    </Table>
  );
}
