import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';
import CButton from '~/components/Button';

import colors from '~/styles/colors';

export const Container = styled.View`
  margin: -85px auto;
`;

export const Photo = styled.View`
  display: flex;
  justify-content: center;

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

export const CameraContainer = styled.View`
  width: 100%;
  height: 90%;
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const Button = styled(CButton)`
  background: ${colors.primary};
  margin: 15px 0 15px 0;
`;
