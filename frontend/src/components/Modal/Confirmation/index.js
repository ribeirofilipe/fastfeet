import React from 'react';
import PropTypes from 'prop-types';

import { Container, Dialog } from './styles';

export default function Confirmation({
  handleExecute,
  handleSetVisible,
  isVisible,
}) {
  return (
    <Container
      style={{
        display: isVisible ? 'flex' : 'none',
      }}
    >
      <Dialog>
        <span>Tem certeza?</span>
        <div>
          <button
            onClick={() => {
              handleExecute();
              handleSetVisible(!isVisible);
            }}
          >
            SIM
          </button>
          <button onClick={() => handleSetVisible(!isVisible)}>NÃO</button>
        </div>
      </Dialog>
    </Container>
  );
}

Confirmation.propTypes = {
  handleExecute: PropTypes.func,
  handleSetVisible: PropTypes.func,
  isVisible: PropTypes.bool,
};
