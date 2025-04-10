import { describe, it, expect } from "vitest";
import { screen, render, getAllByTestId } from "@testing-library/react";
import BookList from "../../Component/BookList";
import fantasy from "../../books/fantasy.json";

describe("bootstap card are equal to file json.", () => {
  it("mounts correctly the list of book", () => {
    render(<BookList books={fantasy} cambioValore={() => {}} />);
    const books = screen.getAllByTestId("Card");

    expect(books.length).toBe(fantasy.length);
  });
});
