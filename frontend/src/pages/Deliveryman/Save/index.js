import React, { useMemo, useState } from 'react';

import { MdInsertPhoto } from 'react-icons/md';
import SaveContainer from '~/components/SaveContainer';

import { Form, Row, InputDiv, Input } from '~/components/Form/styles';
import { LabelThumbnail, Photo } from './styles';

export default function DeliverymanSave() {
  const [thumbnail, setThumbnail] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  return (
    <>
      <SaveContainer route={'deliveryman'} title={'Cadastro de entregadores'} />
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
            <Input type="text" />
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label>Email</label>
            <Input type="text" />
          </InputDiv>
        </Row>
      </Form>
    </>
  );
}
