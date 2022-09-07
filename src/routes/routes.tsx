import { Routes, Route } from "react-router-dom";
import { CardsPage, UsersDetails } from "pages";
import { MainLayout } from "components/layouts";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<CardsPage />} />
        <Route path="/users" element={<UsersDetails />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
