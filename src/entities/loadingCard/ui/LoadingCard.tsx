import type { FC } from "react";
import { LoadingCircle } from "@/shared/assets/index";

export const LoadingCard: FC = () => {
  return (
    <div className="w-80 h-20 flex justify-center items-center">
      <LoadingCircle className="animate-spin" />
    </div>
  );
};
