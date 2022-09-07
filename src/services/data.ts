import { Months, Treatment, UsersArray } from "./context/types";

export const usersArray: Array<UsersArray> = [
  {
    name: "daniel",
    age: 30,
    email: "daniel.roberto1991@hotmail.com",
    tel: "11953327667",
    treatment: "limpeza normal",
    monthsToPay: [
      { month: "jan", year: 2022, value: 300, paid: true },
      { month: "fev", year: 2022, value: 300, paid: false },
      { month: "mar", year: 2022, value: 300, paid: false },
      { month: "abr", year: 2022, value: 300, paid: false },
    ],
  },
];

export const treatments: Treatment = [
  { name: "limpeza normal", value: 1000 },
  { name: "instalação de aparelho", value: 2000 },
  { name: "manutenção de aparelho", value: 500 },
  { name: "extração de dente", value: 2500 },
  { name: "ponte", value: 5000 },
  { name: "canal", value: 3000 },
];

export const monthsMoney: Months = [
  { month: "jan", paid: 0, notPaid: 0 },
  { month: "fev", paid: 0, notPaid: 0 },
  { month: "mar", paid: 0, notPaid: 0 },
  { month: "abr", paid: 0, notPaid: 0 },
  { month: "mai", paid: 0, notPaid: 0 },
  { month: "jun", paid: 0, notPaid: 0 },
  { month: "jul", paid: 0, notPaid: 0 },
  { month: "ago", paid: 0, notPaid: 0 },
  { month: "set", paid: 0, notPaid: 0 },
  { month: "out", paid: 0, notPaid: 0 },
  { month: "nov", paid: 0, notPaid: 0 },
  { month: "dez", paid: 0, notPaid: 0 },
];
