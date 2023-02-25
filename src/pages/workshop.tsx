import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FadeInContainer,
  Header,
  ImageContainer,
  StyledButton,
  StyledImage,
} from "../constant/style";
import styled from "@emotion/styled/macro";
import { deviceMax } from "../constant/constant";
import { StyledImageContainer } from "./home";
import { workshopsData } from "../constant/workshopsData";
import ContactUs from "../components/shred/ContactUs";

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
                {line.content}
              </Title>
            );
          }
        )}
      </Content>
      <ToolsContainer>this is the tools container</ToolsContainer>
      <SumUpContainer></SumUpContainer>

      <ContactUs workshopKey={workshopKey} />
    </FadeInContainer>
  );
};

const Title = styled.div<{ bold?: boolean; color?: string }>`
  direction: rtl;
  margin-bottom: 10px;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ color }) => (color ? color : "black")};
`;

const Content = styled.div`
  text-align: right;
  margin: 0 0 5%;
  display: flex;
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

const ToolsContainer = styled.div`
  background-color: #fde2e4ff;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const SumUpContainer = styled.div``;
export default Workshop;
