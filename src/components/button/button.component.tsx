import React from "react";
import { BTN } from "./button.styles";

interface ButtonProps {
  onClick?: any;
}
const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => {
  return <BTN {...otherProps}>{children}</BTN>;
};

export default Button;
