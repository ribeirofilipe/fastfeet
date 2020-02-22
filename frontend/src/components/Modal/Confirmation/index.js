import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Dialog } from './styles';

export default function Confirmation({ handleExecute, isVisible }) {
  const [visible, setVisible] = useState(true);

  return (
    <Container
      style={{
        display: (isVisible && visible) || isVisible ? 'block' : 'none',
      }}
    >
      <Dialog>
        <span>Tem certeza?</span>
        <button
          onClick={() => {
            handleExecute();
            setVisible(isVisible);
          }}
        >
          Sim
        </button>
        <button onClick={() => setVisible(!visible)}>Nao</button>
      </Dialog>
    </Container>
  );
}

Confirmation.propTypes = {
  handleExecute: PropTypes.func,
  isVisible: PropTypes.bool,
};
