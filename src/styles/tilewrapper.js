import styled from 'styled-components';
import Info from '../styles/info';
import Tile from '../styles/tile';

// Create a tile component that'll render a <img> tag with some styles
export default styled.div`
  position: relative;
  width: 100%;
  max-width: 630px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  &:hover ${Info} {
    transform: translateY(0%);
  }
  &:hover ${Tile} {
    transform: scale(1.1);
  }
`;