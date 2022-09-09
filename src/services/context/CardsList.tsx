import React, { createContext, useEffect, useState } from "react";
import { CardsContextProps, UsersArray } from "./types";
import { usersArray, monthsMoney } from "../data";
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

  const postNewClient = async (newClient: UsersArray) => {
    // novo cliente
    const isExist = users.find((client) => client.id === newClient.id);
    if (isExist) {
      const filterUsers = users.filter(
        (clients) => clients.id !== newClient.id
      );
      localStorage.setItem(
        "@users",
        JSON.stringify([...filterUsers, newClient])
      );
    } else {
      localStorage.setItem("@users", JSON.stringify([...users, newClient]));
    }
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
    postNewClient,
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
