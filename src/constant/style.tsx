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
