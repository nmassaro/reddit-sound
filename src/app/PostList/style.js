import styled from 'styled-components';

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