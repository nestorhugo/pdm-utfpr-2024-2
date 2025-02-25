import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import CarCard from "../app/userspace/carCard";
import { ThemeProvider } from "../src/contexts/themeContext";

describe("CarCard Component", () => {
  const mockCar = {
    id: "1",
    brand: "Toyota",
    model: "Corolla",
    hp: 150,
    onDelete: jest.fn(),
  };

  test("Renderizar corretamente com as props passadas", () => {
    render(
      <ThemeProvider>
        <CarCard
          id={mockCar.id}
          brand={mockCar.brand}
          model={mockCar.model}
          hp={mockCar.hp}
          onDelete={mockCar.onDelete}
        />
      </ThemeProvider>
    );

    expect(screen.getByText(`Marca: ${mockCar.brand}`)).toBeTruthy();
    expect(screen.getByText(`Modelo: ${mockCar.model}`)).toBeTruthy();
    expect(screen.getByText(`HP: ${mockCar.hp}`)).toBeTruthy();
  });

  test("chamar a função de deletar quando clicado", () => {
    render(
      <ThemeProvider>
        <CarCard
          id={mockCar.id}
          brand={mockCar.brand}
          model={mockCar.model}
          hp={mockCar.hp}
          onDelete={mockCar.onDelete}
        />
      </ThemeProvider>
    );

    const deleteButton = screen.getByTestId(`delete-button-${mockCar.id}`);
    fireEvent.press(deleteButton);

    expect(mockCar.onDelete).toHaveBeenCalledWith(mockCar.id);
  });
});
