import React from "react";
import WorkshopItem from "../components/workshop/workshop-item";
import styled from "@emotion/styled/macro";
import { FadeInContainer, Header } from "../constant/style";
import { workshopsInfo } from "../constant/workshopsData";
import { locale } from "../locale/locale";

interface Props {}

const Workshops: React.FC<Props> = () => (
  <>
    <Header>{locale("workshopsHeader")}</Header>
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

export default Workshops;
