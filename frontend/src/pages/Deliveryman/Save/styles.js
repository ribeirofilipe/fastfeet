import styled from 'styled-components';

export const Photo = styled.div`
  width: 20%;
  height: 250px;
  margin: auto;
`;

export const LabelThumbnail = styled.label`
  width: 80%;
  height: 200px;
  margin-top: 25px;

  border-radius: 50%;
  margin-bottom: 20px;
  background-size: cover;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => (props.thumbnail || props.url ? 0 : '')};

  div {
    display: ${props => (props.thumbnail || props.url ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 200px;
    padding: 45px;
    border-radius: 50%;
    border: 1px dashed #ddd;

    p {
      text-align: center;
      font-size: 16px;
      color: #dddddd;
      font-weight: bold;
    }
  }

  input {
    display: none;
  }
`;
