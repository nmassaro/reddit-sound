import styled from 'styled-components';

export const Paginator = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 18px;
  margin: 0 5px;
  outline: none;
  border-style: none;
  border-radius: 12px;
  background-color: #ff4566;
  font-weight: bold;
  transition: all .3s cubic-bezier(.6,0,.4,1);
  color: white;
  box-shadow: 0 1px 2px 0 rgba(255,68,102,.4);

  &:hover {
    box-shadow: 0 10px 34px rgba(255,0,107,.4), 0 2px 16px rgba(255,68,102,.2);
  }
`;