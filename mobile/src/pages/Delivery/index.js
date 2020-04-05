import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { getDeliveriesRequest } from '~/store/modules/delivery/actions';

import Background from '~/components/Background';
import Pending from './Pending';

import {
  Container,
  Avatar,
  Header,
  Breadcrumb,
  Info,
  TextInfo,
  DeliverymanInfo,
  Title,
  Tab,
  Name,
  TabButton,
  TabText,
  Deliveries } from './styles';

export default function Delivery() {

  const [deliveries, setDeliveries] = useState([]);
  const [tabSelected, setTabSelected] = useState('pending');
  const dispatch = useDispatch();

  const deliveryman = useSelector(state => state.deliveryman.deliveryman);
  const deliveriesFound = useSelector(state => state.delivery.deliveries);

  useEffect(() => {
    dispatch(getDeliveriesRequest(deliveryman.id));

    const newDeliveries = deliveriesFound.map(delivery => ({
      ...delivery,
      created_at: format(parseISO(delivery.createdAt), 'dd/MM/yyyy'),
    }))

    setDeliveries(newDeliveries);
  }, [])


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
            {deliveryman?.avatar ? (
              <Avatar source={{ uri: deliveryman?.avatar?.url }} />
            ) : (
              <>{deliveryman?.name && <NamePhoto name={deliveryman?.name} />}</>
            )}
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

        <Deliveries
          data={deliveries}
          keyExtractor={delivery => String(delivery.id)}
          // onEndReached={loadIncidents}
          renderItem={({ item: delivery }) => (
              <Pending key={delivery.id} delivery={delivery} />
          )}
        />

      </Container>
    </Background>
  );
}
