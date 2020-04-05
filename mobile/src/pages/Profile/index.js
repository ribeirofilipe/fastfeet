import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Background from '~/components/Background';

import { signOut } from '~/store/modules/deliveryman/actions';

import {
  Container,
  Avatar,
  Content,
  NamePhoto,
  Details,
  Label,
  Information,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const deliveryman = useSelector(state => state.deliveryman.deliveryman);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
       <Container>
      <Content>
        {deliveryman?.avatar ? (
          <Avatar source={{ uri: deliveryman?.avatar?.url }} />
        ) : (
          <> {deliveryman?.name && <NamePhoto name={deliveryman?.name} />}</>
        )}

        <Details>
          <Label>Nome Completo</Label>
          <Information>{deliveryman?.name}</Information>
          <Label>Email</Label>
          <Information>{deliveryman?.email}</Information>
          <Label>Data de cadastro</Label>
          <Information>{deliveryman?.created_at}</Information>
        </Details>

        <LogoutButton onPress={handleLogout} loading={false}>
          Logout
        </LogoutButton>
      </Content>
    </Container>
    </Background>

  );
}
