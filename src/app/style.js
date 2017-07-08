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

.App, h1 {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-intro {
  font-size: large;
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

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

