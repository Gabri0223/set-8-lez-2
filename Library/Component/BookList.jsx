import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const BookList = ({ books, cambioValore }) => {
  const [search, setSearch] = useState("");
  const [filtredBooks, setFiltredBooks] = useState(books);
  const [selectedAsin, setSelectedAsin] = useState("");

  const handleSelection = (asin) => {
    setSelectedAsin((prevState) => (prevState === asin ? null : asin));
    cambioValore(asin);
  };

  const Search = (e) => {
    e.preventDefault();

    const filterBooks = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );

    setFiltredBooks(filterBooks);
  };
  return (
    <div className="container-fluid">
      <div className=" d-flex justify-content-center">
        <Form className="mb-5 w-100 d-flex justify-content-center">
          <Form.Control
            className="w-50"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></Form.Control>
          <Button onClick={Search}>Cerca</Button>
        </Form>
      </div>
      <div className="row">
        {filtredBooks.map((book) => {
          return (
            <div className="col-6" key={book.asin}>
              <SingleBook
                book={book}
                isSelected={selectedAsin === book.asin}
                onSelect={handleSelection}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
