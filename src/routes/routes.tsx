import { Routes, Route } from "react-router-dom";
import { CardsPage } from "pages";
import { MainLayout } from "components/layouts";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<CardsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
