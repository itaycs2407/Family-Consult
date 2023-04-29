import React from "react";
import styled from "@emotion/styled/macro";
import { deviceMax } from "../../constant/constant";

export interface ToolsProps {
  icon: JSX.Element;
  title: { content: string; bold: boolean };
  content: {
    content: string;
  };
  height?: number;
}
const Tool: React.FC<ToolsProps> = ({ icon, title, content, height }) => (
  <Container height={height}>
    <div>{icon}</div>
    <Header bold={title.bold}>{title.content}</Header>
    <div>{content.content}</div>
  </Container>
);

const Container = styled.div<{ height?: number }>`
  width: 250px;
  min-height: 250px;
  height: ${({ height }) => (height ? `${height}px` : "fit-content")};
  padding: 15px;
  direction: rtl;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  @media screen and ${deviceMax.mobileL} {
    min-height: auto;
    width: 150px;
    height: 150px;
  }
`;

const Header = styled.div<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  margin: 10px;
`;

export default Tool;
