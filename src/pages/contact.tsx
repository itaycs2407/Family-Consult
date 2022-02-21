import React from "react";
import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";

const Contact = () => (
  <Container>
    <label>
      first name
      <input type="text" />
    </label>

    <label>
      last name
      <input type="text" />
    </label>
    <label>
      phone number
      <input type="text" />
    </label>
    <label>
      address
      <input type="text" />
    </label>

    <button onClick={() => alert("send was clicked")}>Send Info</button>
  </Container>
);

const Fadein = keyframes`
from {
  opacity: 0;
}
  to {
    opacity: 1;
  }


`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${Fadein} 1s;
`;
export default Contact;
