import React from "react";
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

const Workshop: React.FC = () => {
  const history = useHistory();
  const { workshopKey } = useParams<{ workshopKey: string }>();

  if (!workshopKey && !(workshopKey in workshopsData)) {
    return null;
  }

  // @ts-ignore
  const workshopData = workshopsData[workshopKey];

  return (
    <FadeInContainer>
      <ImageContainer>
        {workshopData.images.map((image: string, index: number) => {
          return index === 0 ? (
            <ResponsiveImage key={image} src={image} alt={image} />
          ) : (
            <StyledImage key={image} src={image} alt={image} />
          );
        })}
      </ImageContainer>

      <Header>{workshopData.header}</Header>
      <Content>{workshopData.content}</Content>
      <SumUpContainer>
        <SumUpItem> קצר מועד</SumUpItem>
        <SumUpItem>בזום או בקלינקה</SumUpItem>
        <SumUpItem>פרקטי ומותאם לערכי המשפחה</SumUpItem>
      </SumUpContainer>
      <StyledButton onClick={() => history.push(`/contact/${workshopKey}`)}>
        {locale("workshopSinglePageRedirectToContact")}
      </StyledButton>
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

const Content = styled.div`
  text-align: right;
  width: 85%;
  @media screen and ${deviceMax.mobileL} {
    gap: 20px;
  }
`;

const ResponsiveImage = styled.img`
  border-radius: 30px;
  width: 320px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
`;

export default Workshop;
