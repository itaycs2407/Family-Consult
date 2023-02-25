import React from "react";
import { locale } from "../../locale/locale";
import { WorkshopStyledButton } from "../../pages/workshop";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled/macro";

interface Props {
  workshopKey?: string;
  title?: string;
}

const ContactUs: React.FC<Props> = ({ workshopKey, title }) => {
  const history = useHistory();

  return (
    <Container>
      <div>{title ? title : locale("contactUsTitle")}</div>
      <WorkshopStyledButton
        onClick={() =>
          history.push(`/contact/${workshopKey ? workshopKey : ""}`)
        }
      >
        {locale("workshopSinglePageRedirectToContact")}
      </WorkshopStyledButton>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 0 50px;
  color: red;
  text-align: center;
`;

export default ContactUs;
