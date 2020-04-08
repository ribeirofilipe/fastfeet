import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
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
  FooterText,
  DeliveryInfo,
  DetailButton } from '../styles';

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Info({ delivery }) {
  const navigation = useNavigation();

  return (
    <DeliveryInfo>
      <Card>
        <DeliveryHeader>
          <Icon name="local-shipping" color="#7D40E7" size={30} />
          <DeliveryName>{delivery.product}</DeliveryName>
        </DeliveryHeader>
        <TimeLine>
          <Item>
            <Circle active={!!delivery.createdAt} />
          </Item>
          <Line />
          <Item>
            <Circle active={!!delivery.start_date} />
          </Item>
          <Line />
          <Item>
            <Circle active={!!delivery.signature_id} />
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
          <FooterText>{delivery.created_at}</FooterText>
          </FooterInfo>
          <FooterInfo>
            <Label>Cidade</Label>
            <FooterText>{delivery.recipient.city}</FooterText>
          </FooterInfo>
          <FooterInfo>
            <DetailButton onPress={ () => navigation.navigate('Details', { delivery }) }>
              <Detail>Ver detalhes</Detail>
            </DetailButton>
          </FooterInfo>
        </Footer>
    </DeliveryInfo>
  );
}
