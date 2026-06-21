import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "@/features/contact/ContactForm";

describe("ContactForm", () => {
  it("renders the name, email and message fields", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell me about your project/i)).toBeInTheDocument();
  });

  it("shows a validation error when submitted empty", () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});
