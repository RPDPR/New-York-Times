import type { FC } from "react";
import { useState, useCallback } from "react";
import { BurgerButton, CloseButton } from "@/shared/ui/index";
import { APP_CONSTS } from "@/shared/models/index";

export const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setIsOpened((prev) => !prev);
  }, []);

  return (
    <div
      className={`w-full ${
        isOpened ? "h-160" : "h-18"
      } fixed bg-white dark:bg-[#010112] border-b-1 border-[#ededed] px-5 transition-discrete duration-300 z-100`}
    >
      {isOpened ? (
        <div className="w-full h-full flex flex-col justify-center py-5 pr-5">
          <div className="w-full h-full relative flex items-center">
            <CloseButton
              className="absolute left-full top-0 dark:text-white cursor-pointer"
              onClick={handleClick}
            />
            <div className="w-full min-h-[351px] flex justify-center flex-wrap">
              <div className="w-full h-5 flex justify-start">
                <a href="/#">SCIENCE</a>
              </div>
              <div className="w-full h-5 flex justify-start">
                <a href="/#">GENERAL</a>
              </div>
              <div className="w-full h-5 flex justify-start">
                <a href="/#">ENTERTAINMENT</a>
              </div>
              <div className="w-full h-5 flex justify-start">
                <a href="/#">TECHNOLOGY</a>
              </div>
              <div className="w-full h-5 flex justify-start">
                <a href="/#">BUSINESS</a>
              </div>
              <div className="w-full h-5 flex justify-start">
                <a href="/#">HEALTH</a>
              </div>
              <div className="w-full h-5 flex justify-start">
                <a href="/#">SPORTS</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full relative flex items-center">
          <BurgerButton
            className="absolute dark:text-white cursor-pointer"
            onClick={handleClick}
          />
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="font-sans font-bold text-[24px] tracking-[2px]">
              {APP_CONSTS.header.title}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
