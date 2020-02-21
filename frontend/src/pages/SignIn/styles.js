import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 425px;
  background: #fff;
  border-radius: 4px;

  img {
    width: 70%;
    margin-top: 20%;
  }

  form {
    width: 80%;
    margin: auto;

    span {
      font-weight: bold;
      color: #333;
      font-size: 15px;
    }

    input {
      border: 1px solid #dddddd;
      color: #333;
      background: #fff;
    }

    button {
      background: #7d40e7;
    }
  }
`;
