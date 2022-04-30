import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import { locale } from "../locale/locale";
import {
  EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  LANGUAGE,
} from "../constant/constant";

import Select from "react-select";
import { FadeInContainer, Header, StyledButton } from "../constant/style";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { reason } = useParams<{ reason: string }>();

  useEffect(() => {
    if (reason === undefined) return setContactReason(locale("contactReason"));
    if (reason === "consult")
      return setContactReason(locale("contactReasons").consult);
    setContactReason(locale("contactReasons").workshops);
  }, [reason]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactReason, setContactReason] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [successfullySent, setSuccessfullySent] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailDetails = {
    fullName,
    email,
    contactReason,
    phoneNumber,
    contactInfo,
  };

  const clearFields = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setContactInfo("");
    setContactReason("");
  };

  const sendMail = () => {
    setLoading(true);
    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        emailDetails,
        EMAIL_JS_PUBLIC_KEY
      )
      .then(() => {
        setSuccessfullySent(true);

        const timeoutId = setTimeout(() => {
          setSuccessfullySent(false);
          clearFields();
          setLoading(false);
          clearTimeout(timeoutId);
        }, 3000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <FadeInContainer>
      <Card>
        <Header>{locale("contact")}</Header>
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
        <SelectContainer rtl={LANGUAGE === "he"}>
          <Select
            placeholder={locale("contactReason")}
            onChange={(event) =>
              event !== null && setContactReason(event.value)
            }
            value={{
              value: contactReason,
              label: contactReason,
            }}
            options={Object.values(
              locale("contactReasons") as Array<string>
            ).map((option) => ({
              value: option,
              label: option,
            }))}
          />
        </SelectContainer>
        <ContactText
          value={contactInfo}
          onChange={(event) => setContactInfo(event.target.value)}
          placeholder={locale("moreInfoPlaceholder")}
        />
        <ConfirmMessage>
          {successfullySent && locale("emailSendConfirmation")}
        </ConfirmMessage>
        <StyledButton onClick={() => sendMail()}>
          {loading ? (
            <ClipLoader color="white" loading={true} size={16} />
          ) : (
            (locale("send") as string)
          )}
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

const ConfirmMessage = styled.div`
  font-weight: 700;
  height: 40px;
  padding: 10px 30px;
  font-style: italic;
  font-size: 24px;
  color: #44d944;
`;

export default Contact;
