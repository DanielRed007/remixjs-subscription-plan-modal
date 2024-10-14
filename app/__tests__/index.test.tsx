import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ModalProvider } from "~/context/ModalContext";
import Index from "~/routes/_index"; // Importa tu componente a testear

describe("Home Unit Tests", () => {
  test("renders the index page", () => {
    render(
      <ModalProvider>
        <Index />
      </ModalProvider>
    );

    expect(screen.getByText(/View Interlink Plans/i)).toBeInTheDocument();
  });

  test("renders Modal and displays modal after clicking button", () => {
    render(
      <ModalProvider>
        <Index />
      </ModalProvider>
    );

    expect(screen.getByText(/View Interlink Plans/i)).toBeInTheDocument();

    const modalBtn = screen.getByTestId("modal-btn");

    fireEvent.click(modalBtn);

    waitFor(() => {
      expect(
        screen.getByText(/Choose Your Best Subscription Plan/i)
      ).toBeInTheDocument();
    });
  });
});
