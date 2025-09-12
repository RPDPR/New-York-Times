import type { SVGProps, ButtonHTMLAttributes } from "react";

export const BurgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="20" height="2.25" />
    <rect y="6.75" width="20" height="2.25" />
    <rect y="13.5" width="20" height="2.25" />
  </svg>
);

export const BurgerButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <>
      <button {...props}>
        <BurgerIcon />
      </button>
    </>
  );
};
