import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 12px;
  cursor: pointer;
  border: none;
  padding: 0 10px;
  margin: 0;
  font-size: inherit;
  display: inline-block;

  &:focus {
    outline: none;
  }
`;

export const SubredditName = styled.span`
  font-size: 40px;
  padding: 25px;
`;