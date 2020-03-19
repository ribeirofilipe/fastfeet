import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import { setHeaderSelected } from '~/store/modules/header/actions';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();

  const menu = useSelector(state => state.header.menu);

  useEffect(
    () => {
      if (!menu) dispatch(setHeaderSelected('delivery'));
    },
    // eslint-disable-next-line
    []
  );

  function setMenuSelected(value) {
    dispatch(setHeaderSelected(value));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="FASTFEED"></img>

        <nav>
          <ul>
            <Link
              to="/delivery"
              style={{
                color: menu === 'delivery' ? '#444444' : '#999999',
              }}
              onClick={() => setMenuSelected('delivery')}
            >
              ENCOMENDAS
            </Link>
            <Link
              to="/deliveryman"
              style={{
                color: menu === 'deliveryman' ? '#444444' : '#999999',
              }}
              onClick={() => setMenuSelected('deliveryman')}
            >
              ENTREGADORES
            </Link>
            <Link
              to="/recipient"
              style={{
                color: menu === 'recipient' ? '#444444' : '#999999',
              }}
              onClick={() => setMenuSelected('recipient')}
            >
              DESTINATÁRIOS
            </Link>
            <Link
              to="/problem"
              style={{
                color: menu === 'problem' ? '#444444' : '#999999',
              }}
              onClick={() => setMenuSelected('problem')}
            >
              PROBLEMAS
            </Link>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Filipe Ribeiro</strong>
              <Link onClick={handleSignOut}>Sair</Link>
            </div>
            <img
              src={
                'https://api.adorable.io/avatars/54/abott@adorable.pngCopy to Clipboard'
              }
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
