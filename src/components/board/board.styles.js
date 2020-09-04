import styled from "styled-components";

export const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  background: #989898;
  padding: 10px;
  border-radius: 5px;
  position: relative;
`;
