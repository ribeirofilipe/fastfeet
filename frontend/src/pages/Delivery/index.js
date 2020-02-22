import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaPlus, FaEllipsisH, FaEye } from 'react-icons/fa';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { Table, Items } from '~/components/Table/styles';
import { Modal } from '~/components/Modal/Action/styles';
import Confirmation from '~/components/Modal/Confirmation';

import {
  Canceled,
  Deliveried,
  Withdrawal,
  Pending,
  ActionItem,
  Visualization,
  Edit,
  Delete,
  EmptyList,
} from './styles';

import {
  getDeliveriesRequest,
  deleteDeliverieRequest,
} from '~/store/modules/delivery/actions';

export default function Delivery() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    dispatch(getDeliveriesRequest());
  }, [dispatch]);

  const products = useSelector(state => state.delivery.products);

  function handleGetProducts(e) {
    dispatch(getDeliveriesRequest(e));
  }

  function handleDeleteProduct() {
    setIsVisible(!isVisible);
    dispatch(deleteDeliverieRequest(productId));
  }

  function handleOpenDialog(id) {
    setProductId(id);
    setIsVisible(!isVisible);
  }

  function setModalVisible(id) {
    if (id === selectedId) {
      setSelectedId(0);
    } else {
      setSelectedId(id);
    }
  }

  function handleGetStatus(product) {
    if (product.canceled_at)
      return (
        <Canceled>
          <span></span>
          <p>CANCELADA</p>
        </Canceled>
      );
    if (product.signature_id)
      return (
        <Deliveried>
          <span></span>
          <p>ENTREGUE</p>
        </Deliveried>
      );
    if (product.end_date)
      return (
        <Withdrawal>
          <span></span>
          <p>RETIRADA</p>
        </Withdrawal>
      );
    return (
      <Pending>
        <span></span>
        <p>PENDENTE</p>
      </Pending>
    );
  }

  return (
    <Table>
      <span>Gerenciando encomendas</span>
      <div>
        <input
          onChange={e => handleGetProducts(e.target.value)}
          placeholder="Buscar por encomendas"
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
        handleExecute={() => handleDeleteProduct(productId)}
      />

      <Items>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(product => (
              <tr key={product.id}>
                <td># {product.id}</td>
                <td>{product.recipient.name}</td>
                <td>
                  <span>
                    <img
                      src="https://api.adorable.io/avatars/54/abott@adorable.pngCopy to Clipboard"
                      alt="avatar"
                    ></img>
                    {product.deliveryman.name}
                  </span>
                </td>
                <td>{product.recipient.city}</td>
                <td>{product.recipient.state}</td>
                <td>{handleGetStatus(product)}</td>
                <td>
                  <ActionItem onClick={() => setModalVisible(product.id)}>
                    <FaEllipsisH />
                    <Modal
                      style={{
                        display: product.id === selectedId ? 'block' : 'none',
                      }}
                    >
                      <div>
                        <Visualization>
                          <FaEye />
                        </Visualization>
                        <p>Visualizar</p>
                      </div>
                      <div>
                        <Edit>
                          <MdEdit />
                        </Edit>
                        <p>Editar</p>
                      </div>
                      <div onClick={() => handleOpenDialog(product.id)}>
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
