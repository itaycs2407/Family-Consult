import React from "react";
import BulletMarker from "../assets/bullet.jpeg";
import styled from "@emotion/styled/macro";

interface Props {
  title: string;
}

const Bullet: React.FC<Props> = ({ title }) => (
  <Container>
    <StyledBulletMarker src={BulletMarker} alt="BulletMarker" />
    <BulletTitle>{title}</BulletTitle>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const BulletTitle = styled.div``;

const StyledBulletMarker = styled.img`
  margin-left: 10px;
`;

export default Bullet;
