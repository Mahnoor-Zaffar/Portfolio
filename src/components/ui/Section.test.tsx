import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "@/components/ui/Section";

describe("SectionHeading", () => {
  it("renders the index marker, title and description", () => {
    render(<SectionHeading index="// 01 — about" title="About" description="Hello there." />);

    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
    expect(screen.getByText("// 01 — about")).toBeInTheDocument();
    expect(screen.getByText("Hello there.")).toBeInTheDocument();
  });
});
