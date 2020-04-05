import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  margin: -85px auto;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;

  background: #7D40E7;
  width: 370px;
  height: 7%;
  margin: 20px auto;
  border-radius: 4px;
  color: #FFF;
`;

export const Photo = styled.View`
  height: 600px;
  width: 370px;
  background: #FFF;
  padding: 20px;

  border-radius: 4px;
  border: 1px solid #0000001A;
`;


export const TakePictureButton = styled(RectButton)`
  background: rgba(000, 000, 000, 0.5);

  position: absolute;

  padding: 20px;
  border-radius: 100px;

  bottom: 25px;
  align-self: center;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;
