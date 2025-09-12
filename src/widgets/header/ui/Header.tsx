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
      } fixed bg-white dark:bg-black border-b-1 border-[#ededed] px-5 transition-discrete duration-300 z-100`}
    >
      {isOpened ? (
        <div className="w-full h-full flex flex-col justify-center py-5 pr-5">
          <div className="w-full h-full relative flex items-center">
            <CloseButton
              className="absolute left-full top-0 cursor-pointer"
              onClick={handleClick}
            />
            <div className="w-full min-h-[351px] flex justify-center flex-wrap">
              <div className="w-full h-5 flex justify-start">
                <h1>SCIENCE</h1>
              </div>
              <div className="w-full h-5 flex justify-start">
                <h1>GENERAL</h1>
              </div>
              <div className="w-full h-5 flex justify-start">
                <h1>ENTERTAINMENT</h1>
              </div>
              <div className="w-full h-5 flex justify-start">
                <h1>TECHNOLOGY</h1>
              </div>
              <div className="w-full h-5 flex justify-start">
                <h1>BUSINESS</h1>
              </div>
              <div className="w-full h-5 flex justify-start">
                <h1>HEALTH</h1>
              </div>
              <div className="w-full h-5 flex justify-start">
                <h1>SPORTS</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full relative flex items-center">
          <BurgerButton
            className="absolute cursor-pointer"
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
