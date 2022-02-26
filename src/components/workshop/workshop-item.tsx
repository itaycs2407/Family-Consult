import React from "react";
import styled from "@emotion/styled/macro";
import { WorkshopInfo } from "../../types/types";
import Button from "../button";

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
      {workshop.description}
      <Button title={"לחץ לקבלת פרטים"} />
    </Description>
  </Container>
);

const Container = styled.div`
  width: 280px;
  height: 600px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  height: 35%;
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
  text-align: right;
`;

const Description = styled.div`
  text-align: right;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: orange;
  flex: 1;
`;

export default WorkshopItem;
