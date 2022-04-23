import React from "react";
import styled from "@emotion/styled/macro";
import {
  FadeInContainer,
  Header,
  ImageContainer,
  StyledImage,
} from "../constant/style";
import Bullet from "../components/bullet";
import { locale } from "../locale/locale";
import Intro1 from "../assets/personal-consult/intro1.png";
import Intro2 from "../assets/personal-consult/intro2.png";
import Intro3 from "../assets/personal-consult/intro3.png";
import Background from "../assets/personal-consult/background.jpeg";

interface Props {}

const Consult: React.FC<Props> = () => (
  <div
    style={{
      backgroundImage: "url(" + Background + ")",
      backgroundSize: "auto auto",
    }}
  >
    <FadeInContainer>
      <ImageContainer>
        <StyledImage src={Intro1} alt="Intro1" />
        <StyledImage src={Intro3} alt="Intro3" />
        <StyledImage src={Intro2} alt="Intro2" />
      </ImageContainer>
      <Header>{locale("personalConsultHeader")}</Header>
      <ContentContainer>
        {locale("personalConsultSentences").map(
          (sentence: string, index: number) => (
            <p key={index}>{sentence}</p>
          )
        )}

        {locale("personalConsultBullets").map(
          (bullet: string, index: number) => (
            <Bullet key={index} title={bullet} />
          )
        )}

        <p>{locale("personalConsultSumUp")}</p>
      </ContentContainer>
      <SumUpContainer>
        <SumUpItem> קצר מועד</SumUpItem>
        <SumUpItem>בזום או בקלינקה</SumUpItem>
        <SumUpItem>פרקטי ומותאם לערכי המשפחה</SumUpItem>
      </SumUpContainer>
    </FadeInContainer>
  </div>
);

const ContentContainer = styled.p`
  width: 80%;
  text-align: right;
`;

const SumUpContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const SumUpItem = styled.div`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
`;
export default Consult;
