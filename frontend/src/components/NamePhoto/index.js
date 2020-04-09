import React from 'react';

import PropTypes from 'prop-types';
import { Container, TextPhoto } from './styles';

export default function NamePhoto({ name, textStyle, ...rest }) {
  const nameSplit = name && name.split(' ');

  const number = Math.floor(Math.random() * (5 + 1));

  return (
    <Container number={number} {...rest}>
      <TextPhoto style={textStyle} number={number}>
        {nameSplit && nameSplit[0][0]}
        {nameSplit && nameSplit[1][0]}
      </TextPhoto>
    </Container>
  );
}

NamePhoto.propTypes = {
  name: PropTypes.element,
  textStyle: PropTypes.element,
};
