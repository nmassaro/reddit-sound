import styled from 'styled-components';

export const App = styled.div`
* {
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
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

export const SiteTitle = styled.h1`
  text-align: center;
  font-size: 70px;
  font-family: 'Amatic SC', cursive;
  color: tomato;
`;