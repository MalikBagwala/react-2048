import styled from "styled-components";

export const StyledGameOver = styled.div`
  /* ... */
  position: absolute;
  top: 0;
  right: 0;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  padding: 10px;
  z-index: 1;
  border-radius: 5px;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H6 = styled.h6`
  margin: 0;
  font-size: 3rem;
  color: #3e3e3e;
`;
