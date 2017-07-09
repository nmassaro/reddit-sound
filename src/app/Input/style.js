import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 12px;
  cursor: pointer;
  border: none;
  padding: 0 10px;
  margin: 0;
  font-size: inherit;

  &:focus {
    outline: none;
  }
`;

export const SubredditName = styled.div`
  font-size: 40px;
  padding: 25px;
`;