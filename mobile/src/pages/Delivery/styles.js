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

export const Card = styled.View`
  padding: 20px 20px 0 20px;
`;

export const DeliverymanInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DeliveryInfo = styled.View`
  margin-top: 20px;
  border: 1px solid #0000001A;
  justify-content: center;
  width: 350px;
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

export const TimeLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TimeLineText = styled.Text`
  margin-top: 5px;
  max-width: 50px;
  font-size: 11px;
  color: #999999;
`;

export const Circle = styled.View`
  background: ${props => props.active ? '#7D40E7' : '#FFF'};
  border: 1px solid #7D40E7;
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

export const Item = styled.View`
`;

export const Line = styled.View`
  position: relative;
  background: #7D40E7;
  height: 2px;
  width: 125px;
`;

export const Status = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.View`
  margin-top: 20px;
  background: #F8F9FD;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;


export const FooterInfo = styled.View`
  justify-content: flex-end;
`;

export const Label = styled.Text`
  color: #999999;
  font-size: 11px;
`;

export const Detail = styled.Text`
  color: #7D40E7;
  font-size: 15px;
  font-weight: bold;
`;

export const DetailButton = styled.TouchableOpacity`
  color: #7D40E7;
  font-size: 15px;
  font-weight: bold;
`;

export const FooterText = styled.Text`
    color: #444444;
    font-size: 15px;
    font-weight: bold;
`;

export const Deliveries = styled.FlatList.attrs({
  contentContainerStyle: { alignItems: 'center', paddingBottom: 160 },
  showsVerticalScrollIndicator: false,
})`
`;

export const List = styled.View`
  width: 100%;
`;
