import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { workshopsData } from "../constant/workshopsData";
import {
  FadeInContainer,
  Header,
  ImageContainer,
  StyledButton,
  StyledImage,
} from "../constant/style";
import styled from "@emotion/styled/macro";
import { locale } from "../locale/locale";

interface Props {}

const Workshop: React.FC<Props> = () => {
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
        {workshopData.images.map((image: string) => (
          <StyledImage key={image} src={image} alt={image} />
        ))}
      </ImageContainer>

      <Header>{workshopData.header}</Header>
      <div>{workshopData.content}</div>
      <SumUpContainer>
        <SumUpItem> קצר מועד</SumUpItem>
        <SumUpItem>בזום או בקלינקה</SumUpItem>
        <SumUpItem>פרקטי ומותאם לערכי המשפחה</SumUpItem>
      </SumUpContainer>
      <StyledButton onClick={() => history.push("/contact")}>
        {locale("workshopSinglePageRedirectToContact")}
      </StyledButton>
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
