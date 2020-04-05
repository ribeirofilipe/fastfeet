import styled from 'styled-components/native';

export const Container = styled.View`
  margin: -85px auto;

  align-items: center;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Problems = styled.View`
  padding: 15px 20px;
  border: 1px solid #0000001A;
  background: #FFF;
  width: 350px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
`;

export const Description = styled.Text`
  color: #999999;
  font-size: 22px;
`;

export const Data = styled.Text`
  color: #C1C1C1;
  font-size: 16px;
`;
