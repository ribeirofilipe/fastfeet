import styled from 'styled-components/native';

export const Container = styled.View`
  margin: -85px auto;
  background: #FFF;
`;

export const Info = styled.View`
  padding: 20px;
  background: #FFF;
  margin: auto;
  border: 1px solid #0000001A;
  width: 350px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
`;

export const Footer = styled.View`
  flex-direction: row;
  background: #F8F9FD;
  border-radius: 4px;

  align-items: center;
  justify-content: space-around;

`;

export const Item = styled.TouchableOpacity`
  align-items: center;
  max-width: 115px;
  padding: 20px;
  height: 100px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #7D40E7;
  font-weight: bold;
  margin-left: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Recipient = styled.View`
  margin-top: 10px;
`;

export const Slot = styled.View`
  margin-bottom: 25px;
`;

export const Label = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const DataSlot = styled.View`
  flex-direction: row;
`;

export const Data = styled.View`
  margin-right: 50px;
`;

export const ItemText = styled.Text`
  color: #999999;
  font-size: 15px;
  text-align: center;
`;
