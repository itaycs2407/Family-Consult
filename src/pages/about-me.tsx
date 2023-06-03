import React, { useEffect } from "react";
import styled from "@emotion/styled/macro";
import { Fadein, FadeInContainer } from "../constant/style";
import HilaPersonal from "../assets/hilaHome.jpg";
import AboutMe1 from "../assets/aboutMe1.png";
import AboutMe2 from "../assets/aboutme2.png";
import second from "../assets/homepage/middle.png";
import { keyframes } from "@emotion/react";
import { deviceMax } from "../constant/constant";
import { aboutMePart1, aboutMePart2 } from "../constant/aboutMe";
import ContactUs from "../components/shred/ContactUs";
import { useIsMobile } from "../hooks/useIsMobile";

const AboutMe: React.FC = () => {
  const subTitle = <span> מומחית לגיל הרך MA יועצת משפחתית </span>;
  const responsiveSubTitle = (
    <span>
      MA יועצת משפחתית <br />
      מומחית לגיל הרך
    </span>
  );

  const isMobile = useIsMobile();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FadeInContainer>
        <UpperContent>
          <Content>
            <H1>הילה כהן</H1>
            <H2>{subTitle}</H2>
            <ResponsiveSubTitle>{responsiveSubTitle}</ResponsiveSubTitle>
            <ResponsiveImage
              src={HilaPersonal}
              alt={second}
              left={10}
              top={10}
            />
          </Content>

          <Description backgroundColor={"pink"}>
            <DesktopImage src={HilaPersonal} alt={second} left={20} />

            {aboutMePart1.map((line, index) => {
              return (
                <Sentence key={index} bold={line.bold} color={line.color}>
                  {line.content}
                </Sentence>
              );
            })}
          </Description>

          <Description backgroundColor={"honeydew"}>
            <DesktopImage src={AboutMe1} alt={second} left={20} top={10} />

            <DesktopImage src={AboutMe2} alt={second} left={20} top={60} />

            {aboutMePart2.map((line, index) => {
              return (
                <Sentence key={index} bold={line.bold} color={line.color}>
                  {line.content}
                </Sentence>
              );
            })}
          </Description>
          {isMobile && <ContactUs />}
        </UpperContent>
        {!isMobile && <ContactUs />}
      </FadeInContainer>
    </>
  );
};

export const AbsoluteStyledImage = styled.img<{
  top?: number;
  left?: number;
  shadow?: boolean;
}>`
  position: absolute;
  top: ${({ top }) => (top ? top : 15)}%;
  left: ${({ left }) => (left ? left : 10)}%;
  box-shadow: ${({ shadow }) =>
    shadow ? "0 5px 10px rgba(0, 0, 0, 0.8)" : "none"};
  border-radius: 20px;
  width: 15%;
  animation: ${Fadein} 0.75s;
`;

const Content = styled.div`
  text-align: right;
  padding-right: 10%;
  @media screen and ${deviceMax.mobileL} {
    padding-bottom: 10%;
  }
`;

const Sentence = styled.div<{ bold?: boolean; color?: string }>`
  margin-top: 10px;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ color }) => color ?? "black"};
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const UpperContent = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  z-index: 0;
  margin-bottom: 50px;
  padding-bottom: 50px;
  justify-content: right;
  align-items: flex-end;
  @media screen and ${deviceMax.mobileL} {
    height: 50px;
  }
`;

const Description = styled.div<{ backgroundColor: string }>`
  width: 100%;
  position: relative;
  padding: 5% 5%;
  font-size: 22px;
  direction: rtl;
  background: ${({ backgroundColor }) => backgroundColor};

  &:last-child {
    padding: 1% 5% 5%;
  }
  @media screen and ${deviceMax.mobileL} {
    font-size: 12px;
    padding: 5% 5% 50px;
  }
`;

export const MoveFromRight = keyframes`
from {
  right: -10%;
}
  to {
    right :10%;  
  }
`;

export const ResponsiveMoveFromRight = keyframes`
from {
  right: -10%;
}
  to {
    right : 2%;  
  }
`;

const ResponsiveSubTitle = styled.h2`
  display: none;
  position: absolute;
  top: 70%;
  right: 10%;
  animation: ${MoveFromRight} 1s ease-out;

  @media screen and ${deviceMax.mobileL} {
    animation: ${ResponsiveMoveFromRight} 1s ease-out;
    display: initial;
    position: absolute;
    font-size: 10px;
    top: 60%;
    right: 2%;
  }
`;
const H1 = styled.h1`
  animation: ${MoveFromRight} 1s ease-out;

  @media screen and ${deviceMax.mobileL} {
    animation: ${ResponsiveMoveFromRight} 1s ease-out;
    font-size: 14px;
    top: 30%;
    right: 2%;
  }
`;

const H2 = styled.h2`
  animation: ${MoveFromRight} 1s ease-out;
  @media screen and ${deviceMax.mobileL} {
    font-size: 12px;
  }
`;

const ResponsiveImage = styled(AbsoluteStyledImage)`
  display: none;
  @media screen and ${deviceMax.mobileL} {
    display: block;
  }
`;

const DesktopImage = styled(AbsoluteStyledImage)`
  display: block;
  @media screen and ${deviceMax.mobileL} {
    display: none;
  }
`;

const StyledContactUs = styled(ContactUs)`
  @media screen and ${deviceMax.mobileL} {
    display: none;
  }
`;

export default AboutMe;
