import React from "react";

import { render, screen, fireEvent, userEvent } from "@testing-library/react";

import App from "../App";

describe("1 - Verifica se existe cards ao carregar a página", () => {
  it(`A tela contém um card'`, async () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("header-input"), {
      target: { value: "DanielTrybe" },
    });
    fireEvent.click(screen.getByTestId("header-btn"));
    await new Promise((r) => setTimeout(r, 4000));
    expect(screen.getByTestId("card-1-card")).toBeInTheDocument();
  });

  it(`A tela contém 10 cards'`, async () => {
    render(<App />);

    fireEvent.change(screen.getByTestId("header-input"), {
      target: { value: "DanielTrybe" },
    });
    fireEvent.click(screen.getByTestId("header-btn"));
    await new Promise((r) => setTimeout(r, 4000));
    expect(screen.getByTestId("card-1-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-2-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-3-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-4-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-5-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-6-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-7-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-8-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-9-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-10-card")).toBeInTheDocument();
  });

  it(`O card contém os dados solicitados'`, async () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("header-input"), {
      target: { value: "DanielTrybe" },
    });
    fireEvent.click(screen.getByTestId("header-btn"));
    await new Promise((r) => setTimeout(r, 4000));
    expect(screen.getByTestId("card-1-card")).toBeInTheDocument();
    expect(screen.getByTestId("card-1-name")).toBeInTheDocument();
    expect(screen.getByTestId("card-1-githubBtn")).toBeInTheDocument();
    expect(screen.getByTestId("card-1-pop")).toBeInTheDocument();
  });
});

describe.only("2 - Verifica o botão de ir para os detalhes da branch do card", () => {
  it(`O card contém o botão dos detalhes da branch e é clicável'`, async () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("header-input"), {
      target: { value: "DanielTrybe" },
    });
    fireEvent.click(screen.getByTestId("header-btn"));
    await new Promise((r) => setTimeout(r, 4000));

    expect(screen.getByTestId("card-1-detailBranchBtn")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("card-1-detailBranchBtn"));

    await new Promise((r) => setTimeout(r, 4000));
    expect(screen.getByTestId("branchtitle")).toBeInTheDocument();
  });
});

// testes de click e um card mais a frente
