export interface WorkshopInfo {
  key: string;
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
