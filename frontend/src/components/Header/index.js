import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState('');

  return (
    <Container>
      <Content>
        <img src={logo} alt="FASTFEED"></img>

        <nav>
          <ul>
            <li
              style={{
                color: selectedMenu === 'delivery' ? '#444444' : '#999999',
              }}
              onClick={() => setSelectedMenu('delivery')}
            >
              ENCOMENDAS
            </li>
            <li
              style={{
                color: selectedMenu === 'deliveryman' ? '#444444' : '#999999',
              }}
              onClick={() => setSelectedMenu('deliveryman')}
            >
              ENTREGADORES
            </li>
            <li
              style={{
                color: selectedMenu === 'recipient' ? '#444444' : '#999999',
              }}
              onClick={() => setSelectedMenu('recipient')}
            >
              DESTINATÁRIOS
            </li>
            <li
              style={{
                color: selectedMenu === 'problem' ? '#444444' : '#999999',
              }}
              onClick={() => setSelectedMenu('problem')}
            >
              PROBLEMAS
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Filipe Ribeiro</strong>
              <Link to="/">Sair</Link>
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
