import styled, { css } from "styled-components";

export const StyledCell = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: x-large;
  border-radius: 5px;
  background: #cecece;
  color: #545454;
  ${(props) => {
    switch (props.value) {
      case 2:
        return css`
          background: #e8e8e8;
        `;
      case 4:
        return css`
          background: #fff6d8;
        `;

      case 8:
        return css`
          background: #ffe89b;
        `;

      case 16:
        return css`
          background: #ffda61;
        `;

      case 32:
        return css`
          background: #ffb038;
        `;

      case 64:
        return css`
          background: #ff9900;
        `;

      case 128:
        return css`
          background: #ff7474;
        `;

      case 256:
        return css`
          background: #ff5858;
        `;

      case 512:
        return css`
          background: #bd7e64;
        `;

      case 1024:
        return css`
          background: #94543a;
        `;

      case 2048:
        return css`
          background: #383838;
        `;
      default:
        break;
    }
  }}
  ${(props) => {
    if (props.value > 16) {
      return css`
        color: white;
      `;
    }
  }}
`;
