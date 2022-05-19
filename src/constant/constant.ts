import { css } from "@emotion/react";

export const LANGUAGE = "he";

export const colors = {
  1: "#d9d9d8",
  2: "#f8d6de",
  3: "#f7cad6",
  4: "#d2d1d1",
  5: "#e4e1dd",
};

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "435px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const deviceMin = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const deviceMax = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
export const EMAIL_JS_SERVICE_ID = "service_79of5uv";
export const EMAIL_JS_TEMPLATE_ID = "template_ovqms4m";
export const EMAIL_JS_PUBLIC_KEY = "rOWzcKhk3XsaF3nJQ";

export const Test = css`
  @media ${deviceMax.mobileS} {
    display: none;
  }
`;
