import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FadeInContainer,
  Header,
  ImageContainer,
  SpaceLine,
  StyledButton,
  StyledImage,
} from "../constant/style";
import styled from "@emotion/styled/macro";
import { deviceMax } from "../constant/constant";
import { StyledImageContainer } from "./home";
import { workshopsData } from "../constant/workshopsData";
import ContactUs from "../components/shred/ContactUs";
import Tool, { ToolsProps } from "../components/shred/Tool";
import Card, { CardProps } from "../components/shred/Card";
import AboutMe1 from "../assets/aboutMe1.png";
import second from "../assets/homepage/middle.png";
import { AbsoluteStyledImage } from "./about-me";

const Workshop: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { workshopKey } = useParams<{ workshopKey: string }>();

  if (!workshopKey && !(workshopKey in workshopsData)) {
    return null;
  }

  // @ts-ignore
  const workshopData = workshopsData[workshopKey];

  return (
    <FadeInContainer>
      <StyledImageContainer>
        <ImageContainer>
          {workshopData.images.map((image: string, index: number) => {
            return index === 0 ? (
              <ResponsiveImage key={image} src={image} alt={image} />
            ) : (
              <StyledImage key={image} src={image} alt={image} />
            );
          })}
        </ImageContainer>
      </StyledImageContainer>
      <Header>{workshopData.header}</Header>
      <Content>
        {workshopData.promoImage && (
          <AbsoluteStyledImage
            src={workshopData.promoImage}
            alt={second}
            left={35}
            top={10}
            shadow={true}
          />
        )}
        {workshopData.newContentPromo && (
          <>
            {workshopData.newContentPromo.map(
              (
                line: {
                  content: string;
                  bold: boolean;
                  color?: string;
                },
                index: number
              ) => {
                return (
                  <Title key={index} bold={line.bold} color={line.color}>
                    {line.content === "" ? <SpaceLine /> : line.content}
                  </Title>
                );
              }
            )}
          </>
        )}
      </Content>
      {workshopData.tools && (
        <Tools>
          <Title>{workshopData.tools.header.content}</Title>
          <ToolsWrapper>
            {workshopData.tools.toolsData.map(
              (tool: ToolsProps, index: number) => (
                <Tool
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
      {workshopData.cards && (
        <Cards>
          <Title>{workshopData.cards.header.content}</Title>
          <CardsWrapper>
            {workshopData.cards.cardsData.map(
              (card: CardProps, index: number) => (
                <Card
                  key={index}
                  title={card.title}
                  content={card.content}
                  image={card.image}
                />
              )
            )}
          </CardsWrapper>
        </Cards>
      )}

      {workshopData.sumUp && (
        <SumUpContainer>
          {workshopData.sumUp.map(
            (line: { content: string }, index: number) => (
              <div key={index}>
                {line.content === "" ? <SpaceLine /> : line.content}
              </div>
            )
          )}
        </SumUpContainer>
      )}

      <ContactUs workshopKey={workshopKey} />
    </FadeInContainer>
  );
};

export const Title = styled.div<{ bold?: boolean; color?: string }>`
  direction: rtl;
  margin-bottom: 10px;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ color }) => (color ? color : "black")};
`;

export const Content = styled.div`
  text-align: right;
  position: relative;
  margin: 0 0 5%;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: flex-end;
  padding: 0 12%;

  @media screen and ${deviceMax.mobileL} {
    gap: 20px;
  }
`;

export const WorkshopStyledButton = styled(StyledButton)`
  margin: 20px 0 20px;
`;

export const ResponsiveImage = styled.img`
  border-radius: 30px;
  width: 320px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
`;

const Tools = styled.div`
  background-color: #fde2e4ff;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const Cards = styled.div`
  background-color: #fde2e4ff;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const ToolsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
`;

const SumUpContainer = styled.div`
  text-align: center;
  direction: rtl;
`;

export default Workshop;
