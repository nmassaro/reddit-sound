import styled from 'styled-components';

export const App = styled.div`
* {
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

iframe {
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)
}

.subreddit-name {
  font-size: 40px;
  padding: 25px;
}

input {
  cursor: pointer;
  border: none;
  padding: 0 10px;
  margin: 0;
  font-size: inherit;
}

.center {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  align-items: center;
  flex-flow: column;
}
`;

