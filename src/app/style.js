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
  
  .panel {
    padding: 20px;
    max-width: 75%;
    margin: 0 auto;
  }
`;

export const SiteTitle = styled.a`
  margin: 40px 0;
  text-align: center;
  font-size: 70px;
  font-family: 'Amatic SC', cursive;
  color: #ff4566;
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;