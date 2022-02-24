import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";
import { locale } from "../locale/locale";
import { LANGUAGE } from "../constant/constant";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Container>
      <Card>
        <h1>{locale("contact")}</h1>
        <Input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder={locale("fullName")}
          autoFocus
          rtl={LANGUAGE === "he"}
        />
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={locale("email")}
          rtl={LANGUAGE === "he"}
        />
        <Input
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder={locale("phoneNumber")}
          rtl={LANGUAGE === "he"}
        />
        <Select placeholder="ddd" rtl={LANGUAGE === "he"}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>

        <button onClick={() => alert("send was clicked")}>
          {locale("send")}
        </button>
      </Card>
    </Container>
  );
};

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

const Card = styled.div`
  padding: 30px 60px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: white;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input<{ rtl: boolean }>`
  padding: 5px 10px;
  height: 25px;
  width: 250px;
  border-radius: 10px;
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  outline: none;
`;

const Select = styled.select<{ rtl: boolean }>`
  padding: 5px 10px;
  height: 25px;
  width: 250px;
  border-radius: 10px;
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;
export default Contact;
