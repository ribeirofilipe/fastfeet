import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdInsertPhoto } from 'react-icons/md';
import SaveContainer from '~/components/SaveContainer';

import { Form, Row, InputDiv, Input } from '~/components/Form/styles';
import { LabelThumbnail, Photo } from './styles';

import { saveDeliverymenRequest } from '~/store/modules/deliveryman/actions';

export default function DeliverymanSave() {
  const dispatch = useDispatch();

  const [thumbnail, setThumbnail] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function handleSubmit() {
    const data = new FormData();

    data.append('thumbnail', thumbnail);

    dispatch(saveDeliverymenRequest({ data, name, email }));
  }

  return (
    <>
      <SaveContainer
        action={() => handleSubmit()}
        route={'deliveryman'}
        title={'Cadastro de entregadores'}
      />
      <Form>
        <Photo>
          <LabelThumbnail
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            thumbnail={thumbnail}
          >
            <input
              type="file"
              onChange={event => setThumbnail(event.target.files[0])}
            />
            <div>
              <MdInsertPhoto size={60} color={'#DDDDDD'} />
              <p>Adicionar foto</p>
            </div>
          </LabelThumbnail>
        </Photo>

        <Row>
          <InputDiv>
            <label>Nome</label>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
            />
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label>Email</label>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
            />
          </InputDiv>
        </Row>
      </Form>
    </>
  );
}
