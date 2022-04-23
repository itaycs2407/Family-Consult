import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { locale } from "../locale/locale";
import { LANGUAGE } from "../constant/constant";

import Select from "react-select";
import { FadeInContainer, StyledButton } from "../constant/style";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactReason, setContactReason] = useState<string>("");
  const [contactInfo, setContactInfo] = useState("");

  const tParsms = {
    fullName,
    email,
    phoneNumber,
    contactReason,
    contactInfo,
  };

  const sendMail = () => {
    emailjs
      .send("service_79of5uv", "template_ovqms4m", tParsms, "rOWzcKhk3XsaF3nJQ")
      .then(() => {
        alert("the mail was send");
      })
      .catch(() => {
        alert("something crashed");
      });
  };

  return (
    <FadeInContainer>
      <Card>
        <h1>{locale("contact")}</h1>
        <Input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder={locale("fullName") as string}
          autoFocus
          rtl={LANGUAGE === "he"}
        />
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={locale("email") as string}
          rtl={LANGUAGE === "he"}
        />
        <Input
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder={locale("phoneNumber") as string}
          rtl={LANGUAGE === "he"}
        />
        <SelectContainer rtl={LANGUAGE === "he"}>
          <Select
            placeholder={locale("contactReason") as string}
            onChange={(event) =>
              event !== null && setContactReason(event.value)
            }
            options={(locale("contactReasons") as Array<string>).map(
              (option) => ({
                value: option,
                label: option,
              })
            )}
          />
        </SelectContainer>
        <ContactText
          value={contactInfo}
          onChange={(event) => setContactInfo(event.target.value)}
          placeholder={locale("moreInfoPlaceholder") as string}
        />
        <StyledButton onClick={() => sendMail()}>
          {locale("send") as string}
        </StyledButton>
      </Card>
    </FadeInContainer>
  );
};

const Card = styled.div`
  padding: 30px 60px;
  width: 500px;
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
  border: none;
  width: 90%;
  border-radius: 10px;
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  outline: none;
`;

const SelectContainer = styled.div<{ rtl: boolean }>`
  border-radius: 10px;
  width: 95%;
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const ContactText = styled.textarea`
  resize: none;
  height: 200px;
  padding: 12px 20px;
  overflow: hidden;
  width: 86%;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  direction: rtl;
  text-align: right;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;
`;

export default Contact;
