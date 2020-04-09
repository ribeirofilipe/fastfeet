import styled from 'styled-components';
import search from '../../assets/search.svg';

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
      padding: 10px 0 7px 40px;
      margin: 20px 0 20px 0;
      font-size: 15px;
      border-radius: 4px;
      background: #fff url(${search}) no-repeat 120%;
    }

    button {
      display: flex;
      align-items: center;
      padding: 10px 20px 10px 20px;
      cursor: pointer;
      background: #7d40e7;
      color: #fff;
      font-weight: bold;
      border-radius: 4px;
      border: 1px solid #7d40e7;

      span {
        color: #fff;
        margin-right: 9px;
        font-size: 16px;
      }
    }
  }
`;

export const Items = styled.table`
  border-collapse: separate;
  font-size: 0.9em;
  width: 100%;
  height: 100%;
  border-spacing: 0 2em;

  thead {
    tr {
      text-align: left;
      font-size: 16px;

      th {
        :last-child {
          text-align: right;
        }

        padding-left: 30px;
      }
    }
  }

  tbody {
    tr {
      font-size: 16px;
      color: #666666;

      td {
        background: #fff;
        padding: 15px 0 15px 30px;

        height: 70px;

        span {
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: normal;

          img {
            margin-right: 10px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
