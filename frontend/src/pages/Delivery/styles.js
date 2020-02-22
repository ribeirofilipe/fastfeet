import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const Canceled = styled.span`
  display: flex;
  justify-content: center;
  width: 65%;
  color: #de3b3b;
  background: #fab0b0;
  padding: 7px 0 7px 0;
  border-radius: 12px;

  span {
    width: 11px;
    height: 11px;
    margin-right: 10px;
    background: #de3b3b;
    border-radius: 50%;
  }

  p {
    font-weight: bold;
  }
`;

export const Deliveried = styled.span`
  display: flex;
  justify-content: center;
  width: 65%;
  color: #2ca42b;
  background: #dff0df;
  padding: 7px 0 7px 0;
  border-radius: 12px;

  span {
    width: 11px;
    height: 11px;
    margin-right: 10px;
    background: #2ca42b;
    border-radius: 50%;
  }

  p {
    font-weight: bold;
  }
`;

export const Withdrawal = styled.span`
  display: flex;
  justify-content: center;
  width: 65%;
  color: #4d85ee;
  background: #bad2ff;
  padding: 7px 0 7px 0;
  border-radius: 12px;

  span {
    width: 11px;
    height: 11px;
    margin-right: 10px;
    background: #4d85ee;
    border-radius: 50%;
  }

  p {
    font-weight: bold;
  }
`;

export const Pending = styled.span`
  display: flex;
  justify-content: center;
  width: 65%;
  color: #c1bc35;
  background: #f0f0df;
  padding: 7px 0 7px 0;
  border-radius: 12px;

  span {
    width: 11px;
    height: 11px;
    margin-right: 10px;
    background: #c1bc35;
    border-radius: 50%;
  }

  p {
    font-weight: bold;
  }
`;

export const ActionItem = styled.span`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  color: #c6c6c6;
  cursor: pointer;
`;

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

  div {
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
      color: #8e5be8;
    }

    p {
      transition: 0.7s;
      color: #999999;
    }
  }
`;
