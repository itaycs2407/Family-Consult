import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";

interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <Container>
      <h1>this is the about me page</h1>
    </Container>
  );
};

const Fadein = keyframes`
from {
  opacity: 0;
}
  to {
    opacity: 1;
  }
  `;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  animation: ${Fadein} 1s;
`;
export default AboutMe;
