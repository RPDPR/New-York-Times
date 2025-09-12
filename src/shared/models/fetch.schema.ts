export interface ResponseSchema {
  response: {
    docs: ({
      headline: string | null;
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
  headline: string | null;
  abstract: string | null;
  imageUrl: string | null;
  date: string | null;
}

export interface FetchSchema {
  docs: Article[];
}
