import type { FC } from "react";
import { useState, useEffect, useRef } from "react";
import { NewsCard } from "@/entities/newsCard/index";
import { LoadingCard } from "@/entities/loadingCard/index";
import { useGetNewsQuery } from "@/app/services/news/newsApiSlice";
import type { Article } from "@/shared/models/index";
import { formatUserDate } from "@/shared/lib/index";
import { APP_CONSTS } from "@/shared/models/index";

export const NewsFeed: FC = () => {
  const [articles, setArticles] = useState<Record<string, Article[]>>({});
  const [page, setPage] = useState<number>(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const {
    data: news,
    isFetching,
    isLoading,
    isError,
  } = useGetNewsQuery({ page }, { pollingInterval: 30000 });

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isFetching && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loaderRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isFetching, isLoading]);

  useEffect(() => {
    if (news?.docs) {
      setArticles((prev) => {
        const newArticles = [...news.docs];
        const formattedArticles: Record<string, Article[]> = {
          ...prev,
        };

        newArticles.forEach((el) => {
          const key = new Date(el.date).toLocaleDateString("en-CA");
          if (!formattedArticles[key]) {
            formattedArticles[key] = [];
          }
          if (!formattedArticles[key].some((a) => a.webUrl === el.webUrl)) {
            formattedArticles[key].push(el);
          }
        });

        return formattedArticles;
      });
    }
  }, [news]);

  if (isError) {
    return (
      <div className="w-80 h-20 flex justify-center items-center">
        <div className="w-full text-center">
          <h1>{APP_CONSTS.newsFeed.errorText}</h1>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-80">
        <LoadingCard />
      </div>
    );
  }

  return (
    <div className="w-80">
      {Object.entries(articles).map(([day, articleArray], dayIndex) => {
        return (
          <div key={`news-${dayIndex}-${day}`} className="w-full">
            <div
              className={`text-left text-[18px] font-sans font-bold tracking-normal leading-[26px] ${
                dayIndex === 0 ? "py-3" : "py-8"
              }`}
            >
              <h1>News for {day}</h1>
            </div>
            <div className="w-full flex flex-col gap-4">
              {articleArray.map((article, articleIndex) => {
                return (
                  <div
                    key={`newsCard-${articleIndex}-${dayIndex}`}
                    className="border-b-1 last:border-b-0 border-b-[#ededed]"
                  >
                    <NewsCard
                      headline={article.headline}
                      abstract={article.abstract}
                      imageUrl={article.imageUrl}
                      date={formatUserDate(article.date)}
                      webUrl={article.webUrl}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div ref={loaderRef}>{isFetching && <LoadingCard />}</div>
    </div>
  );
};
