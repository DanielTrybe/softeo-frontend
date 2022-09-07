import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CardsProvider from "services/context/CardsList";
import AppRoutes from "routes/routes";

function App() {
  return (
    <BrowserRouter basename="softeo-frontend">
      <CardsProvider>
        <AppRoutes />
      </CardsProvider>
    </BrowserRouter>
  );
}

export default App;
