import React, { useEffect } from "react";
import styled from "@emotion/styled/macro";
import {
  FadeInContainer,
  Header,
  ImageContainer,
  StyledImage,
  SumUpItem,
} from "../constant/style";
import Bullet from "../components/bullet";
import { locale } from "../locale/locale";
import Intro1 from "../assets/personal-consult/intro1.png";
import Intro2 from "../assets/personal-consult/intro2.png";
import Intro3 from "../assets/personal-consult/intro3.png";
import { useHistory } from "react-router-dom";
import { deviceMax } from "../constant/constant";
import { StyledImageContainer } from "./home";
import { ResponsiveImage, WorkshopStyledButton } from "./workshop";

const Consult: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FadeInContainer>
      <StyledImageContainer>
        <ImageContainer>
          <ResponsiveImage src={Intro1} alt="Intro1" />
          <StyledImage src={Intro3} alt="Intro3" />
          <StyledImage src={Intro2} alt="Intro2" />
        </ImageContainer>
      </StyledImageContainer>

      <Header>{locale("personalConsultHeader")}</Header>
      <ContentContainer>
        {locale("personalConsultSentences").map(
          (sentence: string, index: number) => (
            <P key={index}>{sentence}</P>
          )
        )}

        {locale("personalConsultBullets").map(
          (bullet: string, index: number) => (
            <Bullet key={index} title={bullet} />
          )
        )}

        <p>{locale("personalConsultSumUp")}</p>
      </ContentContainer>
      <WorkshopStyledButton onClick={() => history.push(`/contact/consult`)}>
        צרו קשר לקביעת פגישת היכרות
      </WorkshopStyledButton>
      <SumUpContainer>
        <SumUpItem> קצר מועד</SumUpItem>
        <SumUpItem>בזום או בקלינקה</SumUpItem>
        <SumUpItem>פרקטי ומותאם לערכי המשפחה</SumUpItem>
      </SumUpContainer>
    </FadeInContainer>
  );
};

const ContentContainer = styled.p`
  width: 80%;
  text-align: right;
`;

const P = styled.p`
  direction: rtl;
`;
const SumUpContainer = styled.div`
  display: flex;
  gap: 50px;

  @media screen and ${deviceMax.mobileL} {
    display: none;
    flex-direction: column;
    gap: 20px;
  }
`;

export default Consult;
