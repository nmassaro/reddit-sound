import styled from "styled-components";

export const PostList = styled.div`
  max-width: 50%;
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
  font-size: 22px;
  text-align: center;
  color: ${({ active }) => (active ? "#ff4566" : "black")};
  display: flex;
  padding: 10px;

  &:link,
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Upvotes = styled.h3`
  display: inline-block;
  margin: 0 8px 0 0;
  min-width: 100px;
`;

export const VideoFrame = styled.div`
  div,
  iframe {
    position: fixed;
    bottom: 0;
    right: 0;
    width: auto;
    height: auto;
  }
`;
