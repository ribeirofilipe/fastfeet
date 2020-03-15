import styled from 'styled-components';

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;

  div {
    :first-child {
      margin-top: 18px;
    }

    margin-bottom: 10px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-top: 30px;
      }
    }
  }

  span {
    font-size: 14px;
    color: #444444;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #666666;
    margin: 10px 0;
  }
`;
