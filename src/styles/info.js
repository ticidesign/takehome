import styled from 'styled-components';

// Create a tile component that'll render a <div> tag with some styles
export default styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 3vw);
  padding: 1vw 2vw;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  transition: all 0.3s ease-in-out;
`;
