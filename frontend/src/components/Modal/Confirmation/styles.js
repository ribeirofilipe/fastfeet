import styled from 'styled-components';

export const Container = styled.div`
  max-width: 150px;
  max-height: 150px;
  position: absolute;
  margin: 10% 0 20% 33%;
`;

export const Dialog = styled.div`
  border: 1px solid #666666;
  background: #eee;
  border-radius: 7px;
  padding: 50px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 18px;
    color: #666666;
    margin-bottom: 20px;
  }

  position: absolute;
  div {
    button {
      margin-right: 10px;
      border-radius: 9px;
    }
  }
`;
