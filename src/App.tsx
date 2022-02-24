import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import styled from "@emotion/styled/macro";
import Contact from "./pages/contact";

const App: React.FC = () => {
  const [content, setContent] = useState<any>("none");

  return (
    <div className="App">
      <Navbar setContent={setContent} />
      <ContentContainer>
        {content === "contact" && <Contact />}
      </ContentContainer>
    </div>
  );
};

const ContentContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default App;
