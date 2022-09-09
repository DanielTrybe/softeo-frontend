export default function convertMonth(month: string) {
  switch (month) {
    case "jan":
      return 0;
    case "fev":
      return 1;
    case "mar":
      return 2;
    case "abri":
      return 3;
    case "mai":
      return 4;
    case "jun":
      return 5;
    case "jul":
      return 6;
    case "ago":
      return 7;
    case "set":
      return 8;
    case "out":
      return 9;
    case "nov":
      return 10;
    case "dez":
      return 11;
    default:
      return 0;
  }
}
