import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="FASTFEED"></img>
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
