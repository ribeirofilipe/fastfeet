import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RNCamera } from 'react-native-camera';

import { useNavigation } from '@react-navigation/native';

import Background from '~/components/Background';
import BackgroundHeader from '~/components/BackgroundHeader';

import { sendDeliveryConfirmRequest } from '~/store/modules/deliveryConfirm/actions';
import { sendFileRequest } from '~/store/modules/file/actions';

import {
  Container,
  Photo,
  Button,
  CameraContainer,
  TakePictureButton,
} from './styles';

export default function DeliveryConfirm({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  let cameraRef = useRef(null);
  const [pictureUri, setPictureUri] = useState('');

  const deliveryman = useSelector(state => state.deliveryman.deliveryman);
  const signature_id = useSelector(state => state.file.id);

  const { id } = route.params;


  async function registerFile(originalname, filename) {
    dispatch(sendFileRequest(originalname, filename));
  }

  async function handleSubmit() {
    await registerFile(pictureUri, "assignature.jpg");

    dispatch(sendDeliveryConfirmRequest(
      id,
      deliveryman.id,
      signature_id,
    ));

    navigation.navigate('Delivery');

  }

  async function handleTakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setPictureUri(data.uri);


    }
  }

  return (
    <>
     <BackgroundHeader />
     <Background>
      <Container>
        <Photo>
          {pictureUri ? (
              <CameraContainer>
                <Image source={{ uri: pictureUri }} style={{ height: '100%' }} />
              </CameraContainer>
            ) : (
              <CameraContainer>
                <RNCamera
                  ref={ cameraRef }
                  type={ "back" }
                  style={{ flex: 1 }}
                  captureAudio={ false }
                />
                <TakePictureButton onPress={handleTakePicture}>
                  <Icon name="photo-camera" color="#fff" size={30} />
                </TakePictureButton>
              </CameraContainer>
            )}
             <Button onPress={handleSubmit} loading={false}>
              Enviar
             </Button>
          </Photo>
        </Container>
     </Background>
    </>
  );
}
