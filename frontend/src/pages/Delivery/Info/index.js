import React from 'react';

import { ModalStyle } from './styles';

import assign from '~/assets/image.png';

export default function ModalInfo({ info }) {
  const {
    street,
    city,
    state,
    number,
    postal_code,
    delivered,
    withdrawal,
  } = info;

  return (
    <ModalStyle>
      <div>
        <span>Informações de encomenda</span>
        <p>
          {street}, {number}
        </p>
        <p>
          {city} - {state}
        </p>
        <p>{postal_code}</p>
      </div>
      <div>
        <span>Datas</span>
        <p>
          <strong>Retirada: </strong> {withdrawal || '-'}
        </p>
        <p>
          <strong>Entrega: </strong> {delivered || '-'}
        </p>
      </div>
      <div>
        <span>Assinatura do destinatário</span>
        <div>
          <img src={assign} alt="assign"></img>
        </div>
      </div>
    </ModalStyle>
  );
}
