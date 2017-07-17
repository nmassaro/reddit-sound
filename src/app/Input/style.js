import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0 10px;
  margin: 0;
  font-size: inherit;
  display: inline-block;
`;

export const SubredditName = styled.span`
  font-size: 40px;
  padding: 25px;
  animation: slide-from-left 1s ease-in;

  @keyframes slide-from-left {
    0% {
      position: relative;
      left: -100px;
      opacity: 0;
    }
    50% {
      left: -5px;
    }
    100% {
      left: 0px;
      opacity: 1;
    }
  }
`;