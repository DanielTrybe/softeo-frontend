import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

export default function MainLayout() {
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        style={{
          backgroundColor: "#EAEAEA",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Container maxWidth="xl">
          <Header />
        </Container>
      </Container>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
}
