import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10%;
    padding-right: 30px;
    margin-right: 30px;
    border-right: 1px solid #dddddd;
  }

  nav {
    width: 100%;

    ul {
      display: flex;
      justify-content: flex-start;

      li {
        margin-right: 20px;
        color: #999999;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        transition: 0.3s;

        :hover {
          color: #444444;
        }
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
