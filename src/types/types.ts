export interface WorkshopInfo {
  title: string;
  description: string;
  image: string;
}

export type Translation = {
  [id: string]: {
    [id: string]: string | Array<string>;
  };
};

export type Language = "en" | "he";

export type PageContent =
  | "singleConsult"
  | "about"
  | "home"
  | "workshop"
  | "contact";
