import React from "react";
import styled from "@emotion/styled/macro";

export interface CardProps {
  title: { content: string };
  image: string;
  content: { content: string };
}

const Card: React.FC<CardProps> = ({ title, image, content }) => (
  <Container>
    <ContentContainer>
      <Header>{title.content}</Header>
      <Content>{content.content}</Content>
    </ContentContainer>
    <Image src={image} alt={"image"} />
  </Container>
);

const Container = styled.div`
  direction: rtl;
  text-align: right;
  width: 500px;
  height: 300px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
`;

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.div``;

const Image = styled.img`
  border-radius: 20px 0 0 20px;

  height: 300px;
  width: 300px;
`;
const ContentContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
`;

export default Card;
