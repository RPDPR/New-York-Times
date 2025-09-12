import type { FC, HTMLAttributes } from "react";
import type { T_NewsCard } from "../models/types";

export const NewsCard: FC<T_NewsCard & HTMLAttributes<HTMLDivElement>> = (
  props: T_NewsCard
) => {
  return (
    <div className="w-80 h-44 grid grid-cols-[1fr_2fr] gap-x-3 pb-4" {...props}>
      <div className="w-full h-full">
        <p>{props.image}</p>
      </div>
      <div className="w-full h-full">
        <div className="w-full text-left text-[14px] text-[#096FFA] font-sans font-black tracking-normal leading-[100%] pb-2">
          <h2>{props.title}</h2>
        </div>
        <div className="w-full text-left text-[16px] text-black font-sans font-normal tracking-normal leading-[22px] pb-2">
          <p>{props.desc}</p>
        </div>
        <div className="w-full text-left text-[14px] text-[#6D787A] font-sans font-normal tracking-normal leading-[100%]">
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};
