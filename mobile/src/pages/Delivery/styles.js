import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85%;

  margin-bottom: 30px;
`;

export const Breadcrumb = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Tab = styled.View`
  flex-direction: row;
`;

export const TabButton = styled(TouchableOpacity)`
  margin-left: 25px;
`;

export const TabText = styled.Text`
  color: ${props => props.active ? '#7159c1' : '#999999'};
  font-weight: bold;

  border-bottom-width:  ${props => props.active ? 1 + 'px' : 0};
  border-bottom-color: #7159C1;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;

  background: #F4EFFC;
`;

export const Info = styled.View`
  margin-left: 20px;
`;
export const TextInfo = styled.Text`
  font-size: 12px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const DeliverymanInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DeliveryInfo = styled.View`
  margin-top: 20px;
  border: 1px solid #0000001A;
  width: 85%;
  padding: 20px;
`;

export const DeliveryName = styled.Text`
  color: #7D40E7;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
`;

export const DeliveryHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View``;

export const TimeLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TimeLineText = styled.Text`
  margin-top: 5px;
  max-width: 50px;
  font-size: 11px;
  color: #999999;
`;

export const TimeLineItem = styled.View`
  align-items: center;
`;

export const Circle = styled.View`
  background: ${props => props.active ? '#7D40E7' : '#FFF'};
  border: 1px solid #7D40E7;
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

export const Line = styled.View`
  background: #7D40E7;
  height: 2px;
  width: 50px;
  margin-bottom: 20px;
`;
