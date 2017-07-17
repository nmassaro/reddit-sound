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
  
  .panel {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.54);
  }
`;

export const SiteTitle = styled.a`
  margin: 40px 0;
  text-align: center;
  font-size: 70px;
  font-family: 'Amatic SC', cursive;
  color: tomato;
	animation: text-enter 1s linear;

  &:link, &:hover, &:visited, &:active {
    text-decoration: none;
  }

  @keyframes text-enter {
    0% {
      letter-spacing: 20px;
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;