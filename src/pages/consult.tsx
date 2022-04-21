import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein } from "../constant/style";
import Intro1 from "../assets/personalConsult/intro1.png";
import Intro2 from "../assets/personalConsult/intro2.png";
import Intro3 from "../assets/personalConsult/intro3.png";
import Background from "../assets/personalConsult/background.jpeg";
import { locale } from "../locale/locale";
import Bullet from "../components/Bullet";

interface Props {}

const Consult: React.FC<Props> = () => (
  <div
    style={{
      backgroundImage: "url(" + Background + ")",
      backgroundSize: "auto auto",
    }}
  >
    <Container>
      <ImageContainer>
        <Image src={Intro1} alt="Intro1" />
        <Image src={Intro3} alt="Intro3" />
        <Image src={Intro2} alt="Intro2" />
      </ImageContainer>
      <h1>{locale("personalConsultHeader")}</h1>
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
    </Container>
  </div>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: ${Fadein} 1s ease-in-out;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const Image = styled.img`
  border-radius: 30px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
`;

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
