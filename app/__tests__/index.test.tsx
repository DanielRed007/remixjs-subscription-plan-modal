import { render, screen } from "@testing-library/react";
import { ModalProvider } from "~/context/ModalContext";
import Index from "~/routes/_index"; // Importa tu componente a testear

test("renders the index page", () => {
  render(
    <ModalProvider>
      <Index />
    </ModalProvider>
  );
  expect(screen.getByText(/View Interlink Plans/i)).toBeInTheDocument();
});
