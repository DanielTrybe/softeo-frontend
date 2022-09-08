let monthNow = 0;
let newIndex = 0;

export const meses = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

export default function MonthConversion(
  month: number,
  index: number,
  year: number
) {
  if (month + index > 11) {
    const resetDate = meses[monthNow + newIndex];
    newIndex += 1;
    return { month: resetDate, year: year + 1 };
  } else {
    return { month: meses[month + index], year };
  }
}
