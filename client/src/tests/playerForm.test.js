import React from "react";
import PlayerForm from "../components/PlayerForm";
import { render, fireEvent } from "@testing-library/react";

import "mutationobserver-shim";

test("renders form correctly", () => {
  render(<PlayerForm />);
});

test("renders label text correctly", () => {
  const { getByText } = render(<PlayerForm />);
  const labelText = getByText(/Filter By name:/i);
  expect(labelText.innerHTML).toBe("Filter By name:");
});

test("renders placeholder text correctly", () => {
  const { getByPlaceholderText } = render(<PlayerForm />);

  getByPlaceholderText(/type desired name here/i);
});

test("form has test id attached", () => {
  const { getByTestId } = render(<PlayerForm />);

  getByTestId(/filterForm/i);
});

test("submits correctly", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<PlayerForm onSubmit={onSubmit} />);
    fireEvent.submit(getByTestId(/filterForm/i));
    expect(onSubmit).toHaveBeenCalled();
  }); // not finished