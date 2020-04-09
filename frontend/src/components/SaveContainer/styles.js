import styled from 'styled-components';

export const Container = styled.div`
  width: 69%;
  margin: auto;
  padding: 60px 0 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 28px;
    font-weight: bold;
    color: #444444;
  }

  div {
    display: flex;
    align-items: center;
    text-decoration: none;

    a,
    button {
      color: #fff;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      p {
        margin-left: 8px;
      }
    }

    a {
      display: flex;
      align-items: center;

      margin-right: 20px;
      background: #cccccc;
      padding: 8px 25px;
    }

    button {
      display: flex;
      align-items: center;

      border: 1px solid #7d40e7;
      background: #7d40e7;
      padding: 7px 25px;
    }
  }
`;
