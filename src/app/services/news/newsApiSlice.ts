import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { FetchSchema, ResponseSchema } from "@/shared/models/index";

const token = import.meta.env.VITE_API_TOKEN;

export const newsApiSlice = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/svc/",
  }),
  endpoints: (builder) => {
    return {
      getNews: builder.query<FetchSchema, { page: number }>({
        query: ({ page }) =>
          `search/v2/articlesearch.json?page=${page}&sort=newest&api-key=${token}`,
        transformResponse(response: ResponseSchema) {
          const fetchResult: FetchSchema = {
            docs: [],
          };

          if (
            response.response?.docs != null &&
            response.response?.docs.length
          ) {
            response.response.docs.forEach((el) => {
              const articleObject: FetchSchema["docs"][number] = {
                headline: "",
                abstract: "",
                imageUrl: "",
                date: "",
                webUrl: "",
              };

              if (el != null && Object.keys(el).length) {
                articleObject.abstract = el.abstract != null ? el.abstract : "";
                articleObject.headline =
                  el.headline.main != null ? el.headline.main : "";
                articleObject.imageUrl =
                  el.multimedia.thumbnail.url != null
                    ? el.multimedia.thumbnail.url
                    : "";
                articleObject.date = el.pub_date != null ? el.pub_date : "";
                articleObject.webUrl = el.web_url != null ? el.web_url : "";
              }

              fetchResult.docs.push(articleObject);
            });
          }

          return fetchResult;
        },
      }),
    };
  },
});

export const { useGetNewsQuery } = newsApiSlice;
