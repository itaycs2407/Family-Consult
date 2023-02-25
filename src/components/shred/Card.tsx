import React from "react";
import styled from "@emotion/styled/macro";

export interface CardProps {
  title: { content: string };
  image: string;
  content: { content: string };
}

const Card: React.FC<CardProps> = ({ title, image, content }) => {
  return (
    <Container>
      <Content>
        <div>{title.content}</div>
        <div>{content.content}</div>
      </Content>
      <img src={image} alt={"image"} />
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: 200px;
  padding: 15px;
  direction: rtl;
  text-align: right;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Card;
