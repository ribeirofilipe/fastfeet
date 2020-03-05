import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaEllipsisH } from 'react-icons/fa';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { getRecipientRequest } from '~/store/modules/recipient/actions';

import { Table, Items } from '~/components/Table/styles';
import { Modal } from '~/components/Modal/Action/styles';
import Confirmation from '~/components/Modal/Confirmation';
import { EmptyList, Edit, Delete, ActionItem } from './styles';

export default function Recipient() {
  const dispatch = useDispatch();
  const [selectedRecipient, setSelectedRecipient] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [recipientId, setRecipientId] = useState(0);

  const recipients = useSelector(state => state.recipient.recipients);

  useEffect(() => {
    dispatch(getRecipientRequest());
  }, [dispatch]);

  function handleOpenDialog(id) {
    setRecipientId(id);
    setIsVisible(true);
  }

  function handleOpenModal(id) {
    if (id === recipientId) {
      setRecipientId(0);
    } else {
      setRecipientId(id);
    }
  }

  function handleDeleteRecipient() {}

  return (
    <Table>
      <span>Gerenciando encomendas</span>
      <div>
        <input placeholder="Buscar por encomendas"></input>

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
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.length > 0 ? (
            recipients.map(recipient => (
              <tr key={recipient.id}>
                <td># {recipient.id}</td>
                <td>
                  <span>
                    <img src={recipient.id} />
                  </span>
                </td>
                <td># {recipient.name}</td>
                <td># {recipient.email}</td>
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
