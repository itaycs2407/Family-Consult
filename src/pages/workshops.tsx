import React from "react";
import WorkshopItem from "../components/workshop/workshop-item";
import styled from "@emotion/styled/macro";
import { FadeInContainer, Header } from "../constant/style";
import { workshopsInfo } from "../constant/workshopsData";
import { locale } from "../locale/locale";
import { StyledImageContainer } from "./home";

interface Props {}

const Workshops: React.FC<Props> = () => (
  <>
    <Header>{locale("workshopsHeader")}</Header>
    <StyledImageContainer>
      <StyledContainer>
        {workshopsInfo.map((workshop) => (
          <WorkshopItem
            key={workshop.key}
            workshop={workshop}
            workshopKey={workshop.key}
          />
        ))}
      </StyledContainer>
    </StyledImageContainer>
  </>
);

const StyledContainer = styled(FadeInContainer)`
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export default Workshops;
