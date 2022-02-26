import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein } from "../constant/style";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Container>
      <h1>this is the home page</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  animation: ${Fadein} 1s ease-in-out;
`;
export default Home;
