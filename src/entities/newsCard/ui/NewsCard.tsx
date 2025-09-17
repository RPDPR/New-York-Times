import type { FC, HTMLAttributes } from "react";
import type { T_NewsCard } from "../models/types";
import { parseAbstract } from "@/shared/lib/index";

export const NewsCard: FC<T_NewsCard & HTMLAttributes<HTMLDivElement>> = ({
  headline,
  abstract,
  imageUrl,
  date,
  webUrl,
  ...rest
}) => {
  return (
    <div
      className="w-80 min-h-44 bg-white dark:bg-[#010112] grid grid-cols-[1fr_2fr] break-keep gap-x-3 rounded-xl pb-4"
      {...rest}
    >
      <div className="w-full h-full">
        {imageUrl ? (
          <img className="rounded-xl" src={imageUrl} alt="thumbnail" />
        ) : (
          <div className="w-20 h-20 bg-[#ededed] rounded-xl"></div>
        )}
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-full text-left text-[14px] text-[#096FFA] font-sans font-black tracking-normal leading-normal pb-2">
          <a href={webUrl ? webUrl : "/#"}>{headline}</a>
        </div>
        <div className="w-full text-left text-[16px] font-sans font-normal tracking-normal leading-[22px] flex-1 pb-2">
          <p>
            {parseAbstract(abstract, {
              style: {
                color: "#7bb2ff",
                textDecoration: "underline",
                textDecorationColor: "#7bb2ff",
              },
            })}
          </p>
        </div>
        <div className="w-full text-left text-[14px] text-[#6D787A] font-sans font-normal tracking-normal leading-none">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
