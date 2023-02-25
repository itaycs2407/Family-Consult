import React from "react";
import styled from "@emotion/styled/macro";

export interface ToolsProps {
  icon: JSX.Element;
  title: { content: string; bold: boolean };
  content: {
    content: string;
  };
}
const Tool: React.FC<ToolsProps> = ({ icon, title, content }) => (
  <Container>
    <div>{icon}</div>
    <Header bold={title.bold}>{title.content}</Header>
    <div>{content.content}</div>
  </Container>
);

const Container = styled.div`
  width: 250px;
  height: 200px;
  padding: 15px;
  direction: rtl;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const Header = styled.div<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export default Tool;
