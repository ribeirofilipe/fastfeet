import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { getDeliveriesRequest, getDeliveriesPendingRequest } from '~/store/modules/delivery/actions';
import { signOut } from '~/store/modules/deliveryman/actions';

import Background from '~/components/Background';

import DeliveryInfo from './Info';

import NamePhoto from '~/components/NamePhoto';

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

  const [pending, setPending] = useState([]);
  const [deliveried, setDeliveried] = useState([]);
  const [tabSelected, setTabSelected] = useState('pending');
  const dispatch = useDispatch();

  const deliveryman = useSelector(state => state.deliveryman.deliveryman);
  const deliveriesFound = useSelector(state => state.delivery.deliveries);
  const deliveriesPendingFound = useSelector(state => state.delivery.deliveriesPending);
  const id = useSelector(state => state.file.id);

  async function initData() {
    await dispatch(getDeliveriesRequest(deliveryman.id));
    await dispatch(getDeliveriesPendingRequest(deliveryman.id));

    const newDeliveries = getDeliveries(deliveriesFound);
    setDeliveried(newDeliveries);

    const newDeliveriesPending = getDeliveries(deliveriesPendingFound);
    setPending(newDeliveriesPending);
  }

  useEffect(() => {
    initData();
  }, [id])

  function getDeliveries(deliveries) {
    return deliveries.map(delivery => ({
      ...delivery,
      created_at: format(parseISO(delivery.createdAt), 'dd/MM/yyyy'),
      endDate: delivery.end_date ? format(parseISO(delivery?.end_date), 'dd/MM/yyyy') : null,
      startDate: delivery.start_date ? format(parseISO(delivery?.start_date), 'dd/MM/yyyy') : null,
    }))
  }

  function handleSelectViewType(tab) {
    if (tab === 'pending') {
      setTabSelected('pending');

      return;
    }

    setTabSelected('deliveried');
  }

  function handleLogout() {
    dispatch(signOut());
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
          <Icon onPress={handleLogout} name="exit-to-app" size={25} color="red" />
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
          data={ tabSelected === 'deliveried' ? deliveried : pending}
          // onEndReached={loadDeliveries}
          renderItem={({ item: delivery }) => (
              <DeliveryInfo key={delivery.id} delivery={delivery} />
          )}
        />

      </Container>
    </Background>
  );
}
