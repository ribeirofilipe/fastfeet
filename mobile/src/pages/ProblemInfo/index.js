import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import Background from '~/components/Background';
import BackgroundHeader from '~/components/BackgroundHeader';

import { sendProblemRequest } from '~/store/modules/problem/actions';

import { Container, TextArea, Button } from './styles';

export default function ProblemInfo({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [description, setDescription] = useState('');

  const { id } = route.params;

  function handleSendProblem() {
    dispatch(sendProblemRequest({
      id,
      description
    }));

    navigation.goBack();
  }

  return (
    <>
     <BackgroundHeader />
     <Background>
       <Container>
          <TextArea
            onChangeText={ setDescription }
            placeholder={'Inclua aqui o problema que ocorreu na entrega.'}
          />
          <Button onPress={() => handleSendProblem()} loading={false}>
            Enviar
          </Button>
       </Container>
     </Background>
    </>
  );
}
