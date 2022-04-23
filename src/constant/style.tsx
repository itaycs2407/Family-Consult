import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";

export const Fadein = keyframes`
from {
  opacity: 0;
}
  to {
    opacity: 1;  
  }
  `;

export const StyledImage = styled.img`
  border-radius: 30px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const FadeInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: ${Fadein} 1s ease-in-out;
`;

export const StyledButton = styled.button`
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

export const Header = styled.h1`
  text-align: center;
  color: #ff0a78;
`;
