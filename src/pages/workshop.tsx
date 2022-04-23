import React from "react";
import { useParams } from "react-router-dom";
import { workshopsData } from "../constant/workshopsData";
import {
  FadeInContainer,
  ImageContainer,
  StyledButton,
  StyledImage,
} from "../constant/style";
import styled from "@emotion/styled/macro";

interface Props {}

const Workshop: React.FC<Props> = () => {
  const { workshopKey } = useParams<{ workshopKey: string }>();

  if (!workshopKey && !(workshopKey in workshopsData)) {
    return null;
  }

  // @ts-ignore
  const workshopData = workshopsData[workshopKey];

  return (
    <FadeInContainer>
      <ImageContainer>
        {workshopData.images.map((image: string) => (
          <StyledImage key={image} src={image} alt={image} />
        ))}
      </ImageContainer>

      <div>{workshopData.header}</div>
      <div>{workshopData.content}</div>
      <SumUpContainer>
        <SumUpItem> קצר מועד</SumUpItem>
        <SumUpItem>בזום או בקלינקה</SumUpItem>
        <SumUpItem>פרקטי ומותאם לערכי המשפחה</SumUpItem>
      </SumUpContainer>
      <StyledButton>{"להרשמה ופרטים נוספים"}</StyledButton>
    </FadeInContainer>
  );
};

const SumUpContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const SumUpItem = styled.div`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export default Workshop;
