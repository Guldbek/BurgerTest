import { render, screen } from "@testing-library/react";
import App from "./App";
import { create } from "zustand";
import * as NavigationStore from "./stores/useNavigationStore";

const useMockNavigationStore = create((set) => ({
  step: "Date",
  prevStep: () => {},
  nextStep: () => {},
}));

describe("App Component Smoke Test", () => {
  beforeAll(() => {
    jest
      .spyOn(NavigationStore, "default")
      .mockImplementation(useMockNavigationStore);
  });

  test("renders without crashing", () => {
    render(<App />);

    expect(screen.getByText(/Book your day/i)).toBeInTheDocument();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
