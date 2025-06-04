import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

// ✅ React must be in scope before using JSX inside the mock
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  NavLink: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => jest.fn(),
}));

// Minimal props required by BookingForm
const mockProps = {
  date: "",
  setDate: jest.fn(),
  time: "",
  setTime: jest.fn(),
  guests: 1,
  setGuests: jest.fn(),
  occasion: "Birthday",
  setOccasion: jest.fn(),
  availableTimes: ["17:00", "18:00"],
  onSubmit: jest.fn(),
};

test("renders the 'Choose date' label", () => {
  render(<BookingForm {...mockProps} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});


describe("BookingForm", () => {
  const setup = () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    const utils = render(
      <BookingForm
        date=""
        setDate={jest.fn()}
        time=""
        setTime={jest.fn()}
        guests={1}
        setGuests={jest.fn()}
        occasion="Birthday"
        setOccasion={jest.fn()}
        availableTimes={["17:00", "18:00"]}
        onSubmit={handleSubmit}
      />
    );
    return { handleSubmit, ...utils };
  };

  test("Form submits correctly with valid input", () => {
    const { handleSubmit } = setup();

    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2025-06-05" },
    });

    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "18:00" },
    });

    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "2" },
    });

    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Anniversary" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Make Your reservation/i }));

    expect(handleSubmit).toHaveBeenCalled();
  });
});

test("Submit button is enabled and labeled correctly", () => {
  const handleSubmit = jest.fn((e) => e.preventDefault());

  render(
    <BookingForm
      date=""
      setDate={jest.fn()}
      time=""
      setTime={jest.fn()}
      guests={1}
      setGuests={jest.fn()}
      occasion="Birthday"
      setOccasion={jest.fn()}
      availableTimes={["17:00", "18:00"]}
      onSubmit={handleSubmit}
    />
  );

  const submitBtn = screen.getByRole("button", { name: /Make Your reservation/i });
  expect(submitBtn).toBeInTheDocument();
  expect(submitBtn).not.toBeDisabled();
});

