import React from "react";
import { FC } from "react";
import "./style/Button.css";

type ButtonProps = {
  text: string;
};

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button >
      {text}
    </button>
  );
};

export default Button;

