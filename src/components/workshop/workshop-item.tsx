import React from "react";
import styled from "@emotion/styled/macro";

interface Props {
  title: string;
  description: string;
}

const WorkshopItem: React.FC<Props> = ({ title, description }) => (
  <Container>
    <Image>image</Image>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

const Container = styled.div`
  width: 200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: white;
  border: red 2px solid;
`;

const Image = styled.div`
  height: 35%;
  padding: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #61dafb;
`;

const Title = styled.div``;

const Description = styled.div`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: orange;
  flex: 1;
`;

export default WorkshopItem;
