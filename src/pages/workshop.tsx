import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { workshopsData } from "../constant/workshopsData";
import {
  FadeInContainer,
  Header,
  ImageContainer,
  StyledButton,
  StyledImage,
  SumUpItem,
} from "../constant/style";
import styled from "@emotion/styled/macro";
import { locale } from "../locale/locale";
import { deviceMax } from "../constant/constant";
import { StyledImageContainer } from "./home";
import Bullet from "../components/bullet";

const Workshop: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { workshopKey } = useParams<{ workshopKey: string }>();

  if (!workshopKey && !(workshopKey in workshopsData)) {
    return null;
  }

  // @ts-ignore
  const workshopData = workshopsData[workshopKey];
  const { withBullet, withSumUpItems } = workshopData;

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
        {(workshopData.contentPromo || []).map(
          (line: string, index: number) => (
            <Title key={index}>{line}</Title>
          )
        )}

        {workshopData.content.map((line: string, index: number) =>
          withBullet ? (
            <Bullet key={index} title={line} />
          ) : (
            <Title key={index}>{line}</Title>
          )
        )}
      </Content>

      {withSumUpItems && (
        <SumUpContainer>
          {workshopData.sumUpItems.map((item: string, index: number) => (
            <SumUpItem key={index}>{item}</SumUpItem>
          ))}
        </SumUpContainer>
      )}
      <WorkshopStyledButton
        onClick={() => history.push(`/contact/${workshopKey}`)}
      >
        {locale("workshopSinglePageRedirectToContact")}
      </WorkshopStyledButton>
    </FadeInContainer>
  );
};

const SumUpContainer = styled.div`
  display: flex;
  gap: 50px;

  @media screen and ${deviceMax.mobileL} {
    display: none;
    flex-direction: column;
    gap: 20px;
  }
`;

const Title = styled.div`
  direction: rtl;
  margin-bottom: 10px;
`;

const Content = styled.div`
  text-align: right;
  margin: 0 0 5%;
  display: flex;
  flex-direction: column;
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

export default Workshop;
