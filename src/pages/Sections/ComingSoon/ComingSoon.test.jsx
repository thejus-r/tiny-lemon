import React from "react";
import { render, screen } from "@testing-library/react";
import ComingSoon from "./ComingSoon";

test("renders ComingSoon component without errors", () => {
    render(<ComingSoon />);

    // Verificar que los elementos de la interfaz se rendericen correctamente
    expect(screen.getByTestId("under-construction")).toBeInTheDocument();
    expect(screen.getByText("Under Construction")).toBeInTheDocument();
});