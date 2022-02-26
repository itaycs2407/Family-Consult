import React from "react";
import WorkshopItem from "../components/workshop/workshop-item";
import styled from "@emotion/styled/macro";
import { workshopData } from "../constant/constant";
import { Fadein } from "../constant/style";

interface Props {}

const Workshop: React.FC<Props> = () => (
  <>
    <Header>workshop header</Header>
    <Container>
      {workshopData.map((workshop, index) => (
        <WorkshopItem key={index} workshop={workshop} />
      ))}
    </Container>
  </>
);

const Header = styled.h1`
  text-align: center;
  color: red;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  animation: ${Fadein} 1s ease-in-out;
`;
export default Workshop;
