import React, { useEffect } from "react";
import WorkshopItem from "../components/workshop/workshop-item";
import styled from "@emotion/styled/macro";
import { FadeInContainer, Header, StyledButton } from "../constant/style";
import { workshopsInfo } from "../constant/workshopsData";
import { locale } from "../locale/locale";
import { StyledImageContainer } from "./home";
import { useHistory } from "react-router-dom";

const Workshops: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  return (
    <Wrapper>
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
      <ContentContainer>
        <b>
          ? לא מצאתם את ההרצאה או הסדנא המתאימה לכם
          <br />
          לפרטים נוספים, ייעוץ והתאמה, השאירו פרטים ואחזור אליכם תוך 24 שעות
        </b>
      </ContentContainer>
      <StyledButton onClick={() => history.push(`/contact`)}>
        {locale("sendDetails")}
      </StyledButton>
    </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

const ContentContainer = styled.div`
  text-align: center;
  margin: 80px 0 50px;
  width: 35%;
`;

const IntroContainer = styled.div`
  text-align: center;
  line-height: 30px;
  width: 35%;
  margin-bottom: 20px;
`;

const CenteredStyledImageContainer = styled(StyledImageContainer)`
  flex-direction: column;
  align-items: center;
  padding: 20px 0 70px;
`;

export default Workshops;
