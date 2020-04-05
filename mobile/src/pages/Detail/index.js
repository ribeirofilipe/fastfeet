import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import BackgroundHeader from '~/components/BackgroundHeader';
import Background from '~/components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

import {
  Container,
  Info,
  Footer,
  Item,
  Title,
  Header,
  Recipient,
  Slot,
  Label,
  Data,
  DataSlot,
  ItemText,
  InfoText } from './styles';

export default function Detail({ route }) {
  const navigation = useNavigation();

  const { delivery } = route.params;

  return (
    <>
    <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
    <BackgroundHeader />
    <Background>
      <Container>
          <Info>
            <Header>
              <Icon name="local-shipping" size={24} color="#7D40E7" />
              <Title>Informações da entrega</Title>
            </Header>
            <Recipient>
              <Slot>
                <Label>DESTINATÁRIO</Label>
                <InfoText>{ delivery.recipient.name }</InfoText>
              </Slot>
              <Slot>
                <Label>ENDEREÇO DE ENTREGA</Label>
                <InfoText>
                  { delivery.recipient.street }, {' '}
                  { delivery.recipient.number }, {' '}
                  { delivery.recipient.city } - {' '}
                  { delivery.recipient.state}, {' '}
                  { delivery.recipient.postal_code}
                </InfoText>
              </Slot>
              <Slot>
                <Label>PRODUTO</Label>
                <InfoText>{ delivery.product }</InfoText>
              </Slot>
            </Recipient>
          </Info>

          <Info>
            <Header>
              <Icon name="event" size={24} color="#7D40E7" />
              <Title>Situações da entrega</Title>
            </Header>
            <Recipient>
              <Slot>
                <Label>STATUS</Label>
                <InfoText>{ !!delivery.end_date ? 'Entregue' : 'Pendente' }</InfoText>
              </Slot>
              <DataSlot>
                <Data>
                  <Label>DATA DE RETIRADA</Label>
                  <InfoText>{ delivery.start_date ?? '- - / - - / - - - -'}</InfoText>
                </Data>
                <Data>
                  <Label>DATA DE ENTREGA</Label>
                  <InfoText>{ delivery.end_date ?? '- - / - - / - - - -' }</InfoText>
                </Data>
              </DataSlot>
            </Recipient>
          </Info>

          <Footer>
            <Item onPress={() => { navigation.navigate('ProblemInfo', { id: delivery.id }) }}>
              <Icon name="highlight-off" color="red" size={25}/>
              <ItemText>Informar Problema</ItemText>
            </Item>
            <Item onPress={() => { navigation.navigate('Problem', {
                id: delivery.id,
                title: delivery.product
            }) }}
              style={{
                borderLeftWidth: 1,
                borderLeftColor: '#0000001A',
                borderRightWidth: 1,
                borderRightColor: '#0000001A'}
              }>
              <Icon name="error-outline" color="yellow" size={25} />
              <ItemText>Visualizar Problemas</ItemText>
            </Item>
            <Item onPress={() => { navigation.navigate('DeliveryConfirm') }}>
              <Icon name="check-circle" color="purple" backgroundColor="red" size={25} />
              <ItemText>Confimar Entrega</ItemText>
            </Item>
          </Footer>
        </Container>
      </Background>
  </>
  );
}
