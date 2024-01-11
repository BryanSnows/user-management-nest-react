import styled from 'styled-components';

export const GlassContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: start;
`;
