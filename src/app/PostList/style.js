import styled from 'styled-components';

export const PostList = styled.div`
animation: slide-up 1s ease-out;

@keyframes slide-up {
  0% {
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    opacity: 1;
  }
}
`;

export const TrackTitle = styled.a`
  display: block;
  font-size: 26px;
  text-align: center;
  color: black;

  &:link, &:hover, &:focus {
    text-decoration: none;
  }
`;

export const ReactPlayer = {
  borderRadius: '12px',
  boxShadow: '0 4px 4px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)',
  margin: '20px 0'
};