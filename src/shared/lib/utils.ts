export const parseIsoDate = (isoDate: string) => {
  return new Date(isoDate);
};

export const formatUserDate = (date: Date) => {
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

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const minutesStr = minutes.toString().padStart(2, "0");

  return `${month} ${day}, ${year}, ${hours}.${minutesStr} ${
    isPM ? "PM" : "AM"
  }`;
};
