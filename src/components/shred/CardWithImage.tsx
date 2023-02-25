import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

interface CardWithImageProps {
  image: string;
  title: string;
  redirectTo: string;
  redirectText: string;
  content: string;
}

const CardWithImage: React.FC<CardWithImageProps> = ({
  title,
  content,
  redirectTo,
  image,
  redirectText,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <StyledLink to={redirectTo}>{redirectText}</StyledLink>
      <Image src={image} alt=""></Image>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  height: 300px;
  position: relative;
  border: 1px solid red;
  padding: 15px;
  border-radius: 35px;
  text-align: right;
  background: white;
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid red;
  background: white;
`;

const Title = styled.h2``;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  position: absolute;
  bottom: 5%;
  left: 50%;

  transform: translateX(-50%);
`;

const Content = styled.div`
  direction: rtl;
`;
export default CardWithImage;
