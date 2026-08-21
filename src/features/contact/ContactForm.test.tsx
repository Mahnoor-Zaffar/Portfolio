import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "@/features/contact/ContactForm";
import { trackEvent } from "@/lib/posthog";

vi.mock("@/lib/posthog", () => ({
  trackEvent: vi.fn(),
}));

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

  it("fires contact_click on a valid submit", () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText("Your name"), { target: { value: "Jane" } });
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Tell me about your project/i), {
      target: { value: "Hello, I have a project." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    const mock = vi.mocked(trackEvent);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock.mock.calls[0][0]).toBe("contact_click");
    expect(mock.mock.calls[0][1]).toEqual({ source: "form" });
  });
});
