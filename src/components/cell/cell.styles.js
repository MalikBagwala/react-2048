import styled, { css } from "styled-components";

export const StyledCell = styled.div`
  height: 75px;
  width: 75px;
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
          background: #fff8e5;
        `;

      case 8:
        return css`
          background: #ffb74b;
          color: white;
        `;

      case 16:
        return css`
          background: #ff9900;
          color: white;
        `;

      case 32:
        return css`
          background: #ff9900;
          color: white;
        `;

      case 64:
        return css`
          background: #ff9900;
          color: white;
        `;

      case 128:
        return css`
          background: #ff9900;
          color: white;
        `;

      case 256:
        return css`
          background: #ff9900;
          color: white;
        `;

      case 512:
        return css`
          background: #ff9900;
          color: white;
        `;

      case 1024:
        return css`
          background: #ff9900;
          color: white;
        `;

      case 2048:
        return css`
          background: #ff9900;
          color: white;
        `;
      default:
        break;
    }
  }}
`;
