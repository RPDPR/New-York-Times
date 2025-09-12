import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { FetchSchema, ResponseSchema } from "@/shared/models/index";
import { parseIsoDate } from "@/shared/lib/index";

const token = import.meta.env.VITE_API_TOKEN;

// export const newsApiSlice = createApi({
//   reducerPath: "news",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "/api/svc/news/v3/content/",
//   }),
//   endpoints: (builder) => {
//     return {
//       getNews: builder.query({
//         query: () => "all/all.json?api-key=CzuBLlrCPH5CvDB1ugZSFNoUTOAFpNMw",
//       }),
//     };
//   },
// });

// export const { useGetNewsQuery } = newsApiSlice;

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
                headline: null,
                abstract: null,
                imageUrl: null,
                date: null,
              };

              if (el != null && Object.keys(el).length) {
                articleObject.abstract =
                  el.abstract != null ? el.abstract : null;
                articleObject.headline =
                  el.headline != null ? el.headline : null;
                articleObject.imageUrl =
                  el.multimedia.thumbnail.url != null
                    ? el.multimedia.thumbnail.url
                    : null;
                articleObject.date = el.pub_date != null ? el.pub_date : null;
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
