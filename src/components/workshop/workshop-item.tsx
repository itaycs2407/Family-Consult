import React from "react";
import styled from "@emotion/styled/macro";
import { WorkshopInfo } from "../../types/types";
import { locale } from "../../locale/locale";
import { useHistory } from "react-router-dom";
import { StyledButton } from "../../constant/style";

interface Props {
  workshop: WorkshopInfo;
  workshopKey: string;
}
const WorkshopItem: React.FC<Props> = ({ workshop, workshopKey }) => {
  const history = useHistory();

  return (
    <Container
      onClick={() => {
        history.push(`/workshops/${workshopKey}`);
      }}
    >
      <ImageContainer>
        <Image src={workshop.image} />
      </ImageContainer>

      <Title>{workshop.title}</Title>
      <Description>
        {workshop.description}
        <StyledButton>
          {locale("workshopPressForMoreDetails") as string}
        </StyledButton>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  width: 280px;
  height: 450px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  height: 50%;
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
  font-weight: 700;
`;

const Description = styled.div`
  padding: 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #f8d6de;
  flex: 1;
`;

export default WorkshopItem;
