import { number, string } from "yup";

export type UsersArray = {
  name: string;
  age: number;
  email: string;
  tel: string;
  treatment: string;
  monthsToPay: Array<{
    month: string;
    value: number;
    paid: boolean;
    year: number;
  }>;
};

export type SingleMonth = {
  month: string;
  paid: number;
  notPaid: number;
};

export type Months = Array<{
  month: string;
  paid: number;
  notPaid: number;
}>;

export type Treatment = Array<{
  name: string;
  value: number;
}>;

export type Card = {
  card: UsersArray;
  children?: JSX.Element;
  index?: number;
};

export interface CardsContextProps {
  cardsMonthList: Months;
  users: Array<UsersArray>;
  search: string;
  setSearch: (value: string) => void;
  filterUsersByMonth: (month: string) => void;
  getUsers: () => void;
  loading: boolean;
  postNewClient: (newClient: UsersArray) => void;
}
