import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '~/components/Background';

import {
  Container,
  Avatar,
  Header,
  Breadcrumb,
  DeliveryInfo,
  Info,
  TextInfo,
  DeliverymanInfo,
  Title,
  Tab,
  Name,
  TabButton,
  TabText,
  DeliveryName,
  DeliveryHeader,
  Footer,
  TimeLine,
  TimeLineText,
  TimeLineItem,
  Circle,
  Line } from './styles';

export default function Delivery() {
  const navigation = useNavigation();
  const [tabSelected, setTabSelected] = useState('pending');

  const deliveryman = useSelector(state => state.deliveryman.deliveryman);

  function handleSelectViewType(tab) {
    if (tab === 'pending') {
      setTabSelected('pending');

      return;
    }

    setTabSelected('deliveried');
  }

  return (
    <Background>
      <Container>
        <Header>
          <DeliverymanInfo>
            <Avatar
              source={{
                uri: deliveryman.avatar
                  ? deliveryman.avatar.url
                  : 'https://avatars1.githubusercontent.com/u/15038553?s=460&u=86c88160916f81df81c7c7c15b021a171d341771&v=4',
              }}
            />
            <Info>
              <TextInfo>Bem vindo de volta,</TextInfo>
              <Name>{ deliveryman.name }</Name>
            </Info>
          </DeliverymanInfo>
          <Icon name="exit-to-app" size={25} color="red" />
        </Header>

        <Breadcrumb>
          <Title>Entregas</Title>
          <Tab>
            <TabButton onPress={ () => handleSelectViewType('pending') }>
              <TabText active={tabSelected === 'pending'}>
                Pendentes
              </TabText>
            </TabButton>
            <TabButton onPress={ () => handleSelectViewType('deliveried') }>
              <TabText active={tabSelected === 'deliveried'}>
                Entregues
              </TabText>
            </TabButton>
          </Tab>
        </Breadcrumb>

        <DeliveryInfo>
          <DeliveryHeader>
            <Icon name="local-shipping" color="#7D40E7" size={30} />
            <DeliveryName>Encomenda 1</DeliveryName>
          </DeliveryHeader>
          <TimeLine>
            <TimeLineItem>
              <Circle active={true} />
              <TimeLineText>Aguardando Retirada</TimeLineText>
            </TimeLineItem>
            <Line />
            <TimeLineItem>
              <Circle active={true} />
              <TimeLineText>Retirada</TimeLineText>
            </TimeLineItem>
            <Line />
            <TimeLineItem>
              <Circle active={false} />
              <TimeLineText>Entregue</TimeLineText>
            </TimeLineItem>
          </TimeLine>
          <Footer />
        </DeliveryInfo>
      </Container>
    </Background>
  );
}
