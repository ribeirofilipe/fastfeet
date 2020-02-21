import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Table } from '~/components/Table/styles';

import { getDeliveriesRequest } from '~/store/modules/delivery/actions';

// import { Container } from './styles';

export default function Delivery() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeliveriesRequest());
  }, [dispatch]);

  const products = useSelector(state => state.delivery.products);

  function handleGetProducts(e) {
    dispatch(getDeliveriesRequest(e));
  }

  return (
    <Table>
      <span>Gerenciando encomendas</span>
      <div>
        <input
          onChange={e => handleGetProducts(e.target.value)}
          placeholder="Buscar por encomendas"
        ></input>
        <button type="button">
          <span>+</span>
          <span>CADASTRAR</span>
        </button>
      </div>

      {products.map(product => (
        <ul key={product.id}>
          <li>{product.id}</li>
          <li>{product.product}</li>
        </ul>
      ))}
    </Table>
  );
}
