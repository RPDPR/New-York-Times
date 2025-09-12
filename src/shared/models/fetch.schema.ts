export interface ResponseSchema {
  response: {
    docs: ({
      headline: { main: string | null };
      abstract: string | null;
      web_url: string | null;
      multimedia: {
        thumbnail: {
          url: string | null;
        };
      };
      pub_date: string | null;
    } | null)[];
  } | null;
}

export interface Article {
  headline: string;
  abstract: string;
  imageUrl: string;
  date: string;
  webUrl: string;
}

export interface FetchSchema {
  docs: Article[];
}
