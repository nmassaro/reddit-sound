import styled from 'styled-components';

export const Slide = styled.div`
  .slide-enter {
    max-height: 0px;
  }
  .slide-enter.slide-enter-active {
    max-height: 100px;
    overflow-y: hidden;
    transition: all 0.3s cubic-bezier(.36,.61,.64,.34);
  }
  .slide-exit {
    max-height: 100px;
    overflow-y: hidden;
  }
  .slide-exit.slide-exit-active {
    max-height: 0px;
    transition: all 0.3s cubic-bezier(.36,.61,.64,.34);
  }
`;

export const Header = styled.div`
  cursor: pointer;
  width: 100%;
`;

export const Panel = styled.div`
  width: 100%;
`;