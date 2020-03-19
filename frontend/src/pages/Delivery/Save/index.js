import React, { useMemo, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SaveContainer from '~/components/SaveContainer';

import {
  Form,
  Row,
  InputDiv,
  Input,
  Select,
  Option,
} from '~/components/Form/styles';

import {
  getDeliveryRequest,
  updateDeliveryRequest,
  saveDeliveryRequest,
} from '~/store/modules/delivery/actions';

import { getDeliverymenRequest } from '~/store/modules/deliveryman/actions';
import { getRecipientsRequest } from '~/store/modules/recipient/actions';

export default function RecipientSave({ location }) {
  const dispatch = useDispatch();

  const [recipientId, setRecipientId] = useState(0);
  const [deliverymanId, setDeliverymanId] = useState(0);
  const [product, setProduct] = useState('');

  const id = location.state;

  const delivery = useSelector(state => state.delivery.product);
  const recipients = useSelector(state => state.recipient.recipients);
  const deliverymen = useSelector(state => state.deliveryman.deliverymen);

  useMemo(() => {
    setRecipientId(delivery.recipient_id);
    setDeliverymanId(delivery.deliveryman_id);
    setProduct(delivery.product);
  }, [delivery]);

  useEffect(() => {
    dispatch(getDeliverymenRequest());
    dispatch(getRecipientsRequest());

    if (id) {
      dispatch(getDeliveryRequest(id));
    } else {
      setRecipientId(0);
      setDeliverymanId(0);
      setProduct('');
    }

    // eslint-disable-next-line
  }, [id]);

  function handleSubmit() {
    const obj = {
      id: delivery.id,
      deliveryman_id: parseInt(deliverymanId, 0),
      recipient_id: parseInt(recipientId, 0),
      product,
    };

    return id
      ? dispatch(updateDeliveryRequest(obj))
      : dispatch(saveDeliveryRequest(obj));
  }

  return (
    <>
      <SaveContainer
        route={'/delivery'}
        title={id ? 'Edição de encomenda' : 'Cadastro de encomenda'}
        action={() => handleSubmit()}
      />
      <Form>
        <Row>
          <InputDiv width={50}>
            <label>Destinatário</label>
            <Select
              value={recipientId}
              onChange={e => setRecipientId(e.target.value)}
            >
              <Option value={0}>Selecione o destinatário.</Option>
              {recipients.map(recipient => (
                <>
                  <Option value={recipient.id}>{recipient.name}</Option>
                </>
              ))}
            </Select>
          </InputDiv>
          <InputDiv width={50}>
            <label>Entregador</label>
            <Select
              value={deliverymanId}
              onChange={e => setDeliverymanId(e.target.value)}
            >
              <Option value={0}>Selecione o entregador.</Option>
              {deliverymen.map(deliveryman => (
                <>
                  <Option value={deliveryman.id} key={deliveryman.id}>
                    {deliveryman.name}
                  </Option>
                </>
              ))}
            </Select>
          </InputDiv>
        </Row>
        <Row>
          <InputDiv>
            <label>Nome do Produto</label>
            <Input
              type="text"
              onChange={e => setProduct(e.target.value)}
              value={product}
            />
          </InputDiv>
        </Row>
      </Form>
    </>
  );
}

RecipientSave.propTypes = {
  location: PropTypes.object,
};
