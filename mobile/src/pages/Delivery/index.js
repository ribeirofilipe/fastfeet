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
  Status,
  Circle,
  Item,
  Line,
  FooterInfo,
  Detail,
  Label,
  Card,
  FooterText } from './styles';

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
          <Card>
          <DeliveryHeader>
            <Icon name="local-shipping" color="#7D40E7" size={30} />
            <DeliveryName>Encomenda 1</DeliveryName>
          </DeliveryHeader>
          <TimeLine>
            <Item>
              <Circle active={true} />
            </Item>
            <Line />
            <Item>
              <Circle active={true} />
            </Item>
            <Line />
            <Item>
              <Circle active={true} />
            </Item>
          </TimeLine>
          <Status>
              <TimeLineText>Aguardando Retirada</TimeLineText>
              <TimeLineText style={{ marginRight: 13}}>Retirada</TimeLineText>
              <TimeLineText>Entregue</TimeLineText>
          </Status>
          </Card>
          <Footer>
            <FooterInfo>
              <Label>Data</Label>
              <FooterText>15/01/2020</FooterText>
            </FooterInfo>
            <FooterInfo>
              <Label>Cidade</Label>
              <FooterText>Rio do Sul</FooterText>
            </FooterInfo>
            <FooterInfo>
              <Detail>Ver detalhes</Detail>
            </FooterInfo>
          </Footer>
        </DeliveryInfo>

        <DeliveryInfo>
          <Card>
          <DeliveryHeader>
            <Icon name="local-shipping" color="#7D40E7" size={30} />
            <DeliveryName>Encomenda 1</DeliveryName>
          </DeliveryHeader>
          <TimeLine>
            <Item>
              <Circle active={true} />
            </Item>
            <Line />
            <Item>
              <Circle active={true} />
            </Item>
            <Line />
            <Item>
              <Circle active={false} />
            </Item>
          </TimeLine>
          <Status>
              <TimeLineText>Aguardando Retirada</TimeLineText>
              <TimeLineText style={{ marginRight: 13}}>Retirada</TimeLineText>
              <TimeLineText>Entregue</TimeLineText>
          </Status>
          </Card>
          <Footer>
            <FooterInfo>
              <Label>Data</Label>
              <FooterText>15/01/2020</FooterText>
            </FooterInfo>
            <FooterInfo>
              <Label>Cidade</Label>
              <FooterText>Rio do Sul</FooterText>
            </FooterInfo>
            <FooterInfo>
              <Detail>Ver detalhes</Detail>
            </FooterInfo>
          </Footer>
        </DeliveryInfo>
      </Container>
    </Background>
  );
}
