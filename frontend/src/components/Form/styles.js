import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Form = styled.div`
  width: 69%;
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 30px;
  border-radius: 4px;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const Input = styled(InputMask)`
  margin-top: 12px;
  padding: 14px;
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  width: 100%;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: #444444;
    font-weight: bold;
  }

  :not(:first-child) {
    padding-left: 15px;
  }
  width: ${props => (props.width ? `${props.width}%` : '100%')};
`;

export const Select = styled.select`
  margin-top: 12px;
  padding: 14px;
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid #dddddd;
  width: 100%;
  background: #fff;
`;

export const Option = styled.option`
  font-size: 20px;
  border: 1px solid #fff;
`;
