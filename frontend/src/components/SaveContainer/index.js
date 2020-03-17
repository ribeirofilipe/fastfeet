import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdDone } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

import { Container } from './styles';

export default function SaveContainer({ route, title, action }) {
  return (
    <Container>
      <span>{title}</span>
      <div>
        <Link to={route}>
          <IoIosArrowBack size={20} />
          <p>VOLTAR</p>
        </Link>
        <button onClick={action}>
          <MdDone size={20} />
          <p>SALVAR</p>
        </button>
      </div>
    </Container>
  );
}

SaveContainer.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
