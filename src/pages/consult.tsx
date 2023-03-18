import React, { useEffect } from "react";
import {
  FadeInContainer,
  Header,
  ImageContainer,
  SpaceLine,
  StyledImage,
} from "../constant/style";
import { locale } from "../locale/locale";
import Intro1 from "../assets/personal-consult/intro1.png";
import Intro2 from "../assets/personal-consult/intro2.png";
import Intro3 from "../assets/personal-consult/intro3.png";
import { useHistory } from "react-router-dom";
import { StyledImageContainer } from "./home";
import { Content, ResponsiveImage, Title } from "./workshop";
import { personalConsultData } from "../constant/personalConsult";

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
      <Content>
        {personalConsultData.intro && (
          <>
            {personalConsultData.intro.map((line, index: number) => (
              <Title key={index} bold={line.bold} color={line.color}>
                {line.content === "" ? <SpaceLine /> : line.content}
              </Title>
            ))}
          </>
        )}
      </Content>
    </FadeInContainer>
  );
};

export default Consult;
