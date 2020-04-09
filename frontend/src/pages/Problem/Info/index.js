import React from 'react';

import PropTypes from 'prop-types';

import { ModalStyle } from './styles';

export default function ModalInfo({ info }) {
  console.log(info);

  return (
    <ModalStyle>
      <span>VISUALIZAR PROBLEMA</span>
      <p>{info}</p>
    </ModalStyle>
  );
}

ModalInfo.propTypes = {
  info: PropTypes.string.isRequired,
};
