import React from "react";
import styled from "@emotion/styled/macro";

interface Props {
  title: string;
}

const Button: React.FC<Props> = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

const StyledButton = styled.button`
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 15px;
  border: none;
  box-shadow: inset 2px 2px 2px 0 rgba(255, 255, 255, 0.5),
    7px 7px 20px 0 rgba(0, 0, 0, 0.1), 4px 4px 5px 0 rgba(0, 0, 0, 0.1);
  background: #ff0a78;

  &:hover {
    background-color: #ff6392;
  }
`;

export default Button;
