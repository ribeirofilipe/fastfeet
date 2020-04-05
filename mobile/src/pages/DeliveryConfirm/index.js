import React, { useState, useRef } from 'react';
import { Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import BackgroundHeader from '~/components/BackgroundHeader';

import { Container, SubmitButton, Photo, Camera, TakePictureButton } from './styles';

export default function DeliveryConfirm() {
  const [pictureUri, setPictureUri] = useState('');
  let cameraRef = useRef(null);

  async function handletakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
    }
  }

  return (
    <>
     <BackgroundHeader />
     <Background>
       <Container>
       {pictureUri ? (
          <Photo>
            <Image source={{ uri: pictureUri }} style={{ height: '100%' }} />
          </Photo>
        ) : (
          <Photo>
            <Camera ref={ cameraRef } type="back" captureAudio={false} />
            <TakePictureButton onPress={ handletakePicture }>
              <Icon name="photo-camera" color="#fff" size={30} />
            </TakePictureButton>
          </Photo>
        )}
        <SubmitButton>
          <Text style={{ fontSize: 20, color: '#FFF' }}>Enviar</Text>
        </SubmitButton>
       </Container>
     </Background>
    </>
  );
}
