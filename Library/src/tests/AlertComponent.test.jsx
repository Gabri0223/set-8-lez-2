import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AlertComment from "../../Component/AlertComponent";

describe("Alert exsist", () => {
  it("mounts correctly the alert", () => {
    render(<AlertComment />);

    const alert = screen.getByRole("alert");
    expect(alert).toBeTruthy();
  });
});
