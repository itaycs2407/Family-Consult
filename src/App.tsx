import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import styled from "@emotion/styled/macro";

const App: React.FC = () => {
  const [content, setContent] = useState<any>("none");

  return (
    <div className="App">
      <Navbar setContent={setContent} />
      <ContentContainer>{content}</ContentContainer>
    </div>
  );
};

const ContentContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
