import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import { locale } from "../locale/locale";
import { LANGUAGE } from "../constant/constant";

import Select from "react-select";
import Button from "../components/button";
import { Fadein } from "../constant/style";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactReason, setContactReason] = useState<string>("");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [contactInfo, setContactInfo] = useState("");

  useEffect(() => {
    setShowMoreInfo(contactReason === locale("moreInfoKey"));
    setContactInfo("");
  }, [contactReason]);

  return (
    <Container>
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
          showMoreInfo={showMoreInfo}
          placeholder={locale("moreInfoPlaceholder") as string}
        />

        <Button title={locale("send") as string} />
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${Fadein} 1s ease-in-out;
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
  width: 90%;
  border-radius: 10px;
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  outline: none;
`;

const SelectContainer = styled.div<{ rtl: boolean }>`
  border-radius: 10px;
  width: 100%;
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const ContactText = styled.textarea<{ showMoreInfo: boolean }>`
  resize: none;
  height: ${({ showMoreInfo }) => (showMoreInfo ? "150px" : "0px")};
  visibility: ${({ showMoreInfo }) => (showMoreInfo ? "visible" : "hidden")};
  padding: 12px 20px;
  overflow: hidden;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  direction: rtl;
  text-align: right;
  font-size: 16px;
  transition: all 1s ease-in-out;
`;

export default Contact;
