import styled from 'styled-components';

export const Paginator = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 15px;
  font-size: 22px;
  outline: none;
  border-style: none;
  border-radius: 12px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.54), 0 2px 2px 0 rgba(0,0,0,0.25);
  background-color: tomato;
  color: white;

  &:active {
    transform: translateY(2px);
  }
`;