import React, { useEffect } from "react";
import WorkshopItem from "../components/workshop/workshop-item";
import styled from "@emotion/styled/macro";
import { FadeInContainer, Header } from "../constant/style";
import { workshopsInfo } from "../constant/workshopsData";
import { locale } from "../locale/locale";
import { StyledImageContainer } from "./home";

const Workshops: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
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
};

const StyledContainer = styled(FadeInContainer)`
  flex-direction: row;
  gap: 30px;

  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

export default Workshops;
