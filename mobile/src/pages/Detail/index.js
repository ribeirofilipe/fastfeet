import React, { useEffect, useState } from 'react';
import { StatusBar,Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import BackgroundHeader from '~/components/BackgroundHeader';
import Background from '~/components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

import Button from '~/components/Button';

import { startDeliveryRequest } from '~/store/modules/delivery/actions';

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
  InfoText,
  StartDelivery } from './styles';

export default function Detail({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { delivery } = route.params;
  const deliveryman = useSelector(state => state.deliveryman.deliveryman);

  function handleStartDelivery() {
    if (delivery.start_date) {
      Alert.alert(
        'Hey!',
        'Encomenda já iniciada!'
      );

      return;
    }

    dispatch(startDeliveryRequest(delivery.id, deliveryman.id));

    navigation.navigate('Delivery');
  }

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
                  <InfoText>{ delivery.startDate ?? '- - / - - / - - - -'}</InfoText>
                </Data>
                <Data>
                  <Label>DATA DE ENTREGA</Label>
                  <InfoText>{ delivery.endDate ?? '- - / - - / - - - -' }</InfoText>
                </Data>
              </DataSlot>
            </Recipient>
          </Info>

          <Footer>
            <Item disabled={ !!delivery.end_date } onPress={() => { navigation.navigate('ProblemInfo', { id: delivery.id }) }}>
              <Icon name="highlight-off" color={ !!delivery.end_date ? 'gray' : 'red' } size={25}/>
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
            <Item disabled={ !!delivery.end_date || !delivery.start_date } onPress={() => { navigation.navigate('DeliveryConfirm', { id: delivery.id }) }}>
              <Icon name="check-circle" color={ !!delivery.end_date || !delivery.start_date ? 'gray' : 'purple' }  backgroundColor="red" size={25} />
              <ItemText>Confimar Entrega</ItemText>
            </Item>
          </Footer>

          <StartDelivery status={ delivery.start_date || delivery.end_date }>
            <Button onPress={ handleStartDelivery } loading={false}>
              RETIRAR ENCOMENDA
            </Button>
          </StartDelivery>
        </Container>
      </Background>
  </>
  );
}
