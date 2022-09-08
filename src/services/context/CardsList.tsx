import React, { createContext, useEffect, useState } from "react";

// import { CardsContextProps } from "./interface";

import { CardsContextProps, UsersArray, Months } from "./types";
import { usersArray, treatments, monthsMoney } from "../data";

export const CardsContext = createContext({} as CardsContextProps);

const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardsMonthList] = useState(monthsMoney);
  const [users, setUsers] = useState([] as Array<UsersArray>);
  const [search, setSearch] = useState("DanielTrybe");
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    // busca todos usuários
    const getUsers = localStorage.getItem("@users");
    if (getUsers) {
      const value = JSON.parse(getUsers);
      const response: Array<UsersArray> = await new Promise(
        (resolve, reject) => {
          setTimeout(async () => {
            try {
              resolve(await value);
            } catch (error) {
              reject(error);
            } finally {
              setLoading(false);
            }
          }, 2000);
        }
      );
      setUsers(response);
    }
  };

  const filterUsersByMonth = (month: string) => {
    const usersByMonth = users.filter((user) =>
      user.monthsToPay.find((paidMonth) => paidMonth.month === month)
    );
    return usersByMonth;
  };

  const postNewClient = async (newClient: UsersArray) => {
    // novo cliente
    localStorage.setItem("@users", JSON.stringify([...users, newClient]));
    getUsers();
  };

  useEffect(() => {
    const getLocalUsers = localStorage.getItem("@users");
    if (!getLocalUsers) {
      localStorage.setItem("@users", JSON.stringify(usersArray));
    }
    getUsers();
  }, [search]);

  const values = {
    cardsMonthList,
    search,
    setSearch,
    users,
    getUsers,
    loading,
    filterUsersByMonth,
    postNewClient,
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
