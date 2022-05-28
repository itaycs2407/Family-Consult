import React from "react";
import styled from "@emotion/styled/macro";
import { FadeInContainer } from "../constant/style";
import Header from "../assets/header.jpg";

interface Props {}

const AboutMe: React.FC<Props> = () => (
  <FadeInContainer>
    <ImageContainer>
      <img src={Header} alt="cover" />
    </ImageContainer>
    <h1>סדנת הורים לצעירים</h1>

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
  </FadeInContainer>
);

const P = styled.p`
  width: 90%;
  font-size: 22px;
  direction: rtl;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 0 30px;
`;

export default AboutMe;
