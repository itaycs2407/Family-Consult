import React from "react";
import WorkshopItem from "../components/workshop/workshop-item";
import styled from "@emotion/styled/macro";
import { FadeInContainer } from "../constant/style";
import { workshopsInfo } from "../constant/workshopsData";

interface Props {}

const Workshops: React.FC<Props> = () => (
  <>
    <Header>workshop header</Header>
    <StyledContainer>
      {workshopsInfo.map((workshop) => (
        <WorkshopItem
          key={workshop.key}
          workshop={workshop}
          workshopKey={workshop.key}
        />
      ))}
    </StyledContainer>
  </>
);

const StyledContainer = styled(FadeInContainer)`
  flex-direction: row;
`;
const Header = styled.h1`
  text-align: center;
  color: red;
`;

export default Workshops;
