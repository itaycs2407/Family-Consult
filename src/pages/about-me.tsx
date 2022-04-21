import React from "react";
import styled from "@emotion/styled/macro";
import { Fadein } from "../constant/style";
import Cover from "../assets/workshop/cover.jpeg";
import Cover1 from "../assets/workshop/1.jpeg";
import Header from "../assets/workshop/header.jpeg";
import Cover3 from "../assets/workshop/3.jpeg";

interface Props {}

const AboutMe: React.FC<Props> = () => (
  <Container>
    <ImageContainer>
      <Image src={Cover1} alt="cover" />
      <Image src={Cover1} alt="cover" />
      <Image src={Cover1} alt="cover" />
      <Image src={Header} alt="cover" />
    </ImageContainer>
    <h1>סדנת הורים לצעירים</h1>

    {/*<img src={Cover2} alt="cover" />*/}
    {/*<img src={Cover3} alt="cover" />*/}

    <P>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </P>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  animation: ${Fadein} 1s ease-in-out;
`;

const Image = styled.img`
  border-radius: 30px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
`;

const P = styled.p`
  width: 40%;
  font-size: 22px;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 0 30px;
`;

export default AboutMe;
