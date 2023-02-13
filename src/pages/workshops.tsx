import React, { useEffect } from "react";
import WorkshopItem from "../components/workshop/workshop-item";
import styled from "@emotion/styled/macro";
import { FadeInContainer, Header } from "../constant/style";
import { workshopsInfo } from "../constant/workshopsData";
import { locale } from "../locale/locale";
import { StyledImageContainer } from "./home";

const IntroContainer = styled.div`
  text-align: center;
  line-height: 30px;
  width: 35%;
  margin-bottom: 20px;
`;

const CenteredStyledImageContainer = styled(StyledImageContainer)`
  flex-direction: column;
  align-items: center;
`;

const Workshops: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header>{locale("workshopsHeader")}</Header>
      <CenteredStyledImageContainer>
        <IntroContainer>
          <b>
            סדרת סדנאות והרצאות לשלבים שונים בחיי ההורות שלנו כדי להעניק להורים
            ולכאלה שעתידים להיות הורים כלים מעשיים וחשובים להתנהלות נכונה בבית,
            שיפור התקשורת, יצירת אווירה רגועה והכי חשוב על מנת להעניק לילדים
            שלנו את הטוב ביותר
          </b>
          <br />? אז, מה מתאים לכם
        </IntroContainer>
        <StyledContainer>
          {workshopsInfo.map((workshop) => (
            <WorkshopItem
              key={workshop.key}
              workshop={workshop}
              workshopKey={workshop.key}
            />
          ))}
        </StyledContainer>
      </CenteredStyledImageContainer>
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
