import type { SVGProps, ButtonHTMLAttributes } from "react";

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 21L1 1M21 1L1 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const CloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button {...props}>
        <CloseIcon />
      </button>
    </>
  );
};
