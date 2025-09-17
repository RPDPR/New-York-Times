import type { AnchorHTMLAttributes } from "react";

export const parseIsoDate = (isoDate: string) => {
  return new Date(isoDate);
};

export const formatUserDate = (date: string) => {
  const formattedDate = parseIsoDate(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[formattedDate.getMonth()];
  const day = formattedDate.getDate();
  const year = formattedDate.getFullYear();

  let hours = formattedDate.getHours();
  const minutes = formattedDate.getMinutes();
  const isPM = hours >= 12;

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const minutesStr = minutes.toString().padStart(2, "0");

  return `${month} ${day}, ${year}, ${hours}.${minutesStr} ${
    isPM ? "PM" : "AM"
  }`;
};

export const parseAbstract = (
  abstract: string,
  props?: AnchorHTMLAttributes<HTMLAnchorElement>
): React.ReactNode => {
  const parser = new DOMParser();
  const content = parser.parseFromString(abstract, "text/html");

  const processNode = (node: ChildNode): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      if (el.tagName.toLowerCase() === "a") {
        return (
          <a
            key={`${Math.random()}-${el.textContent}`}
            href={el.getAttribute("href") || "#"}
            {...props}
          >
            {el.textContent}
          </a>
        );
      }
      return Array.from(el.childNodes).map(processNode);
    }

    return null;
  };

  return Array.from(content.body.childNodes).map(processNode);
};
