import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein } from "../constant/style";

interface Props {}

const Consult: React.FC<Props> = () => (
  <Container>
    <h1>this is the consult page</h1>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  animation: ${Fadein} 1s ease-in-out;
`;
export default Consult;
