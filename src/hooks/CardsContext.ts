import { useContext } from "react";
import { CardsContext } from "services/context/CardsList";

export const useCardsContext = () => {
  const context = useContext(CardsContext);
  if (context === undefined) {
    throw new Error("useGeneralContext must be used within a GeneralProvider");
  }
  return context;
};

export default useCardsContext;
