import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaEllipsisH } from 'react-icons/fa';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import {
  getRecipientRequest,
  deleteRecipientRequest,
} from '~/store/modules/recipient/actions';

import { Table, Items } from '~/components/Table/styles';
import { Modal } from '~/components/Modal/Action/styles';
import Confirmation from '~/components/Modal/Confirmation';
import { EmptyList, Edit, Delete, ActionItem } from './styles';

export default function Recipient() {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [recipientId, setRecipientId] = useState('');

  const recipients = useSelector(state => state.recipient.recipients);

  useEffect(() => {
    dispatch(getRecipientRequest());
  }, [dispatch]);

  function handleOpenDialog(id) {
    setRecipientId(id);
    setIsVisible(true);
  }

  function handleOpenModal(id) {
    setRecipientId(id);
  }

  function handleDeleteRecipient(id) {
    dispatch(deleteRecipientRequest(id));
  }

  function handleGetRecipient(name) {
    dispatch(getRecipientRequest(name));
  }

  return (
    <Table>
      <span>Gerenciando destinatários</span>
      <div>
        <input
          onChange={e => handleGetRecipient(e.target.value)}
          placeholder="Buscar por destinatário"
        ></input>

        <button type="button">
          <span>
            <FaPlus />
          </span>
          <span>CADASTRAR</span>
        </button>
      </div>

      <Confirmation
        isVisible={isVisible}
        handleExecute={() => handleDeleteRecipient(recipientId)}
        handleSetVisible={setIsVisible}
      />

      <Items>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.length > 0 ? (
            recipients.map(recipient => (
              <tr key={recipient.id}>
                <td># {recipient.id}</td>
                <td>{recipient.name}</td>
                <td>
                  {recipient.street} {recipient.number}, {recipient.city} -{' '}
                  {recipient.state}
                </td>
                <td>
                  {' '}
                  <ActionItem onClick={() => handleOpenModal(recipient.id)}>
                    <FaEllipsisH />
                    <Modal
                      style={{
                        display:
                          recipient.id === recipientId ? 'block' : 'none',
                      }}
                    >
                      <div>
                        <Edit>
                          <MdEdit />
                        </Edit>
                        <p>Editar</p>
                      </div>
                      <div onClick={() => handleOpenDialog(recipient.id)}>
                        <Delete>
                          <MdDeleteForever />
                        </Delete>
                        <p>Deletar</p>
                      </div>
                    </Modal>
                  </ActionItem>
                </td>
              </tr>
            ))
          ) : (
            <EmptyList>
              <p>Nenhum item encontrado.</p>
            </EmptyList>
          )}
        </tbody>
      </Items>
    </Table>
  );
}
