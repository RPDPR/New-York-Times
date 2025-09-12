import type { FC } from "react";
import { useState, useEffect, useRef } from "react";
import { NewsCard } from "@/entities/newsCard/index";
import { LoadingCard } from "@/entities/loadingCard/index";
import { useGetNewsQuery } from "@/app/services/news/newsApiSlice";
import type { Article, FetchSchema } from "@/shared/models/index";

const data = {
  "16.06.2023": {
    "1": {
      title: "OOY",
      desc: "Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours",
      image: "./src/nikita.png",
      date: "Feb 26, 2023, 16.32 PM",
    },
    "2": {
      title: "NIKITA",
      desc: "Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours",
      image: "./src/nikita.png",
      date: "Feb 26, 2023, 16.32 PM",
    },
  },
  "15.06.2023": {
    "1": {
      title: "OOY",
      desc: "Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours",
      image: "./src/nikita.png",
      date: "Feb 26, 2023, 16.32 PM",
    },
    "2": {
      title: "NIKITA",
      desc: "Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours",
      image: "./src/nikita.png",
      date: "Feb 26, 2023, 16.32 PM",
    },
    "3": {
      title: "IS_THERE",
      desc: "Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours",
      image: "./src/nikita.png",
      date: "Feb 26, 2023, 16.32 PM",
    },
  },
};

export const NewsFeed: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const { data: news, isFetching, isLoading } = useGetNewsQuery({ page });
  console.log(news);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isFetching) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loaderRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isFetching]);

  useEffect(() => {
    if (news?.docs) {
      setArticles((prev) => [...prev, ...news.docs]);
    }
  }, [news]);

  return (
    <div className="w-80">
      {articles.map(([key, value], index) => {
        return (
          <div key={`news-${key}`} className="w-full">
            <div
              className={`text-left text-[18px] text-black font-sans font-bold tracking-normal leading-[26px] ${
                index === 0 ? "py-3" : "py-8"
              }`}
            >
              <h1>News for {key}</h1>
            </div>
            <div className="w-full flex flex-col gap-4">
              {Object.entries(value).map(([key, value]) => {
                return (
                  <div
                    key={`newsCard-${key}`}
                    className="border-b-1 last:border-b-0 border-b-[#ededed]"
                  >
                    <NewsCard
                      title={value.title}
                      desc={value.desc}
                      image={value.image}
                      date={value.date}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div ref={loaderRef}>
        {isLoading || isFetching ? <LoadingCard /> : ""}
      </div>
    </div>
  );
};
