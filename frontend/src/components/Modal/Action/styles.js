import styled from 'styled-components';
import { darken } from 'polished';

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 160px;
  margin-left: 3.8%;
  margin-top: 5.1%;
  background: #fff;
  border-radius: 4px;
  padding: 15px 5px;
  flex-direction: column;
  box-shadow: 0px 0px 2px #00000026;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    height: 0;
    width: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #fff;
  }

  div,
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    :hover {
      p {
        color: ${darken(0.2, '#999999')};
      }
    }

    :not(:last-child) {
      padding-bottom: 15px;
      border-bottom: 1px solid #00000026;
    }

    :not(:first-child) {
      padding-top: 15px;
    }

    span {
      margin-left: 10px;
      margin-right: 10px;
    }

    p {
      transition: 0.7s;
      color: #999999;
    }
  }
`;
