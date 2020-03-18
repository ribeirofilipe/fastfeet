import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { MdInsertPhoto } from 'react-icons/md';
import SaveContainer from '~/components/SaveContainer';

import { Form, Row, InputDiv, Input } from '~/components/Form/styles';
import { LabelThumbnail, Photo } from './styles';

import {
  saveDeliverymenRequest,
  getDeliverymanRequest,
  updateDeliverymenRequest,
} from '~/store/modules/deliveryman/actions';
import { saveFileRequest } from '~/store/modules/file/actions';

export default function DeliverymanSave({ location }) {
  const dispatch = useDispatch();

  const [thumbnail, setThumbnail] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');

  const id = location.state;

  const deliveryman = useSelector(state => state.deliveryman.deliveryman);

  useMemo(() => {
    setName(deliveryman.name);
    setEmail(deliveryman.email);
    setUrl(deliveryman.avatar.url);
  }, [deliveryman]);

  useEffect(() => {
    if (id) {
      dispatch(getDeliverymanRequest(id));
    } else {
      setName('');
      setEmail('');
      setUrl('');
    }

    // eslint-disable-next-line
  }, [id]);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const avatar_id = useSelector(state => state.file.avatar_id);

  function handleSubmit() {
    const data = new FormData();
    data.append('file', thumbnail);

    dispatch(saveFileRequest(data));

    const obj = { name, email, avatar_id };

    return id
      ? dispatch(updateDeliverymenRequest(obj))
      : dispatch(saveDeliverymenRequest(obj));
  }

  return (
    <>
      <SaveContainer
        action={() => handleSubmit()}
        route={'/deliveryman'}
        title={'Cadastro de entregadores'}
      />
      <Form>
        <Photo>
          <LabelThumbnail
            id="thumbnail"
            style={{ backgroundImage: `url(${preview || url})` }}
            thumbnail={thumbnail || url}
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
              required
            />
          </InputDiv>
        </Row>
      </Form>
    </>
  );
}

DeliverymanSave.propTypes = {
  location: PropTypes.object,
};
