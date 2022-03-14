import React from "react";
import styled from "@emotion/styled/macro";
import { WorkshopInfo } from "../../types/types";
import Button from "../button";
import { locale } from "../../locale/locale";

interface Props {
  workshop: WorkshopInfo;
}

const WorkshopItem: React.FC<Props> = ({ workshop }) => (
  <Container>
    <ImageContainer>
      <Image src={workshop.image} />
    </ImageContainer>
    <Title>{workshop.title}</Title>
    <Description>
      <Button title={locale("workshopPressForMoreDetails") as string} />
    </Description>
  </Container>
);

const Container = styled.div`
  width: 280px;
  height: 300px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  height: 65%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Image = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  padding: 10px;
  background-color: #f8d6de;
  text-align: center;
`;

const Description = styled.div`
  text-align: right;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #f8d6de;
  flex: 1;
`;

export default WorkshopItem;
