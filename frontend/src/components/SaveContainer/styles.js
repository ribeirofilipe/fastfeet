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
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    text-decoration: none;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      margin-right: 20px;
      padding: 0 25px;

      background: ${props => (props.save ? '#7158c1' : '#cccccc')};
      height: 45px;
      color: #fff;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;

      p {
        margin: auto;
      }
    }
  }
`;
