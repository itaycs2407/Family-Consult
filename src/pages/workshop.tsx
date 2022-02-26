import React from "react";
import WorkshopItem from "../components/workshop/workshop-item";
import styled from "@emotion/styled/macro";
import { workshopData } from "../constant/constant";
import { Fadein } from "../constant/style";

interface Props {}

const Workshop: React.FC<Props> = () => {
  return (
    <Container>
      {workshopData.map((workshop, index) => (
        <WorkshopItem key={index} workshop={workshop} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  animation: ${Fadein} 1s ease-in-out;
`;
export default Workshop;
