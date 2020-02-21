import styled from 'styled-components';

export const Table = styled.div`
  max-width: 1600px;
  max-height: 600px;

  margin: 60px auto;

  span {
    display: flex;
    font-size: 28px;
    font-weight: bold;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 20%;
      border: 1px solid #dddddd;
      padding: 10px;
      margin: 20px 0 20px 0;
      font-size: 15px;
      border-radius: 4px;
    }

    button {
      display: flex;
      align-items: center;

      padding: 3px 20px 3px 20px;
      cursor: pointer;
      background: #7d40e7;
      color: #fff;
      font-weight: bold;
      border-radius: 4px;

      span {
        :first-child {
          font-size: 30px;
        }

        color: #fff;
        margin-right: 9px;
        font-size: 18px;
      }
    }
  }
`;
