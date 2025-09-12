import type { FC } from "react";
import { LabelNewsApi } from "@/shared/assets/index";
import { APP_CONSTS } from "@/shared/models/index";

export const Footer: FC = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 h-47 bg-white dark:bg-[#010112] px-15 pt-10 pb-5">
      <div className="w-60 h-full mx-auto flex flex-col justify-between">
        <div className="w-full text-[12px] font-sans font-normal flex justify-between">
          <a href="/#">Log In</a>
          <a href="/#">About Us</a>
          <a href="/#">Publishers</a>
          <a href="/#">Sitemap</a>
        </div>
        <div className="w-full text-[12px] font-sans font-normal flex justify-center">
          <div className="w-21 flex justify-center flex-wrap">
            <p>Powered by</p>
            <a href="/#" className="cursor-pointer pt-2">
              <LabelNewsApi />
            </a>
          </div>
        </div>
        <div className="w-full text-[12px] font-sans font-normal text-center">
          <p>{APP_CONSTS.footer.copyright}</p>
        </div>
      </div>
    </div>
  );
};
