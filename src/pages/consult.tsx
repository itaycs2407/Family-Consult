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
import promoImage from "../assets/personal-consult/promImageConsult.png";
import { useHistory } from "react-router-dom";
import { StyledImageContainer } from "./home";
import {
  Content,
  ResponsiveImage,
  Title,
  Tools,
  ToolsWrapper,
} from "./workshop";
import { personalConsultData } from "../constant/personalConsult";
import { AbsoluteStyledImage } from "./about-me";
import second from "../assets/homepage/middle.png";
import Tool, { ToolsProps } from "../components/shred/Tool";
import ContactUs from "../components/shred/ContactUs";

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
        <AbsoluteStyledImage
          src={promoImage}
          alt={second}
          left={35}
          top={10}
          shadow={true}
        />
      </Content>
      {personalConsultData.tools && (
        <Tools>
          <ToolsWrapper>
            {personalConsultData.tools.map(
              (tool: ToolsProps, index: number) => (
                <Tool
                  height={320}
                  key={index}
                  content={tool.content}
                  title={tool.title}
                  icon={tool.icon}
                />
              )
            )}
          </ToolsWrapper>
        </Tools>
      )}
      <ContactUs />
    </FadeInContainer>
  );
};

export default Consult;
