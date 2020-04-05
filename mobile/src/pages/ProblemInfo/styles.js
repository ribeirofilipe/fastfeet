import styled from 'styled-components';
import Textarea from 'react-native-textarea';
import { RectButton } from 'react-native-gesture-handler';
import Background from '~/components/Background';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: -85px auto;
`;

export const TextArea = styled(Textarea).attrs({
  textAlignVertical: 'top',
  fontSize: 20,
})`
  height: 335px;
  width: 370px;
  background: #FFF;
  padding: 20px;

  border-radius: 4px;
  border: 1px solid #0000001A;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;

  background: #7D40E7;
  width: 370px;
  height: 8%;
  margin: 180px auto;
  border-radius: 4px;
  color: #FFF;
`;
