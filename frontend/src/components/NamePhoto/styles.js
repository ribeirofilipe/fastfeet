import styled from 'styled-components';

const colors = [
  {
    color: '#A28FD0',
    background: '#F4EFFC',
  },
  {
    color: '#CB946C',
    background: '#FCF4EE',
  },
  {
    color: '#83CEC9',
    background: '#EBFBFA',
  },
  {
    color: '#CC7584',
    background: '#FFEEF1',
  },
  {
    color: '#A8D080',
    background: '#F4F9EF',
  },
  {
    color: '#CCCC8B',
    background: '#FCFCEF',
  },
];

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => colors[props.number].background};

  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

export const TextPhoto = styled.p`
  font-size: 17px;
  color: ${props => colors[props.number].color};
  margin: auto;
`;
