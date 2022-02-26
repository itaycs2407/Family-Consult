import React from "react";
import WorkshopItem from "../components/workshop/workshop-item";
import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";

interface Props {}

const Workshop: React.FC<Props> = () => {
  return (
    <Container>
      {[1, 2, 3, 4].map((item, index) => (
        <WorkshopItem
          key={index}
          title={"title"}
          description={
            "sdfGsdfg sdfghsdfg" + "sd" + "fg" + "sdf" + "gs" + "dfg" + "sdfg"
          }
        />
      ))}
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
export default Workshop;
