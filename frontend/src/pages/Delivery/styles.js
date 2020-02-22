import styled from 'styled-components';

export const Container = styled.div``;

export const Canceled = styled.span`
  display: flex;
  justify-content: center;
  width: 65%;
  color: #de3b3b;
  background: #fab0b0;
  padding: 7px 0 7px 0;
  border-radius: 12px;

  span {
    width: 11px;
    height: 11px;
    margin-right: 10px;
    background: #de3b3b;
    border-radius: 50%;
  }

  p {
    font-weight: bold;
  }
`;

export const Deliveried = styled.span`
  display: flex;
  justify-content: center;
  width: 65%;
  color: #2ca42b;
  background: #dff0df;
  padding: 7px 0 7px 0;
  border-radius: 12px;

  span {
    width: 11px;
    height: 11px;
    margin-right: 10px;
    background: #2ca42b;
    border-radius: 50%;
  }

  p {
    font-weight: bold;
  }
`;

export const Withdrawal = styled.span`
  display: flex;
  justify-content: center;
  width: 65%;
  color: #4d85ee;
  background: #bad2ff;
  padding: 7px 0 7px 0;
  border-radius: 12px;

  span {
    width: 11px;
    height: 11px;
    margin-right: 10px;
    background: #4d85ee;
    border-radius: 50%;
  }

  p {
    font-weight: bold;
  }
`;

export const Pending = styled.span`
  display: flex;
  justify-content: center;
  width: 65%;
  color: #c1bc35;
  background: #f0f0df;
  padding: 7px 0 7px 0;
  border-radius: 12px;

  span {
    width: 11px;
    height: 11px;
    margin-right: 10px;
    background: #c1bc35;
    border-radius: 50%;
  }

  p {
    font-weight: bold;
  }
`;

export const ActionItem = styled.span`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  color: #c6c6c6;
  cursor: pointer;
`;

export const Visualization = styled.span`
  color: #8e5be8;
`;
export const Edit = styled.span`
  color: #4d85ee;
`;
export const Delete = styled.span`
  color: #de3b3b;
`;

export const EmptyList = styled.div`
  p {
    color: #333;
    font-size: 20px;
  }
`;

export const Dialog = styled.div``;
