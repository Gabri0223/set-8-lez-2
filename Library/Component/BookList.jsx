import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
    filtredBooks: this.props.books,
  };
  render() {
    const { books } = this.props;

    const search = (e) => {
      const { search } = this.state;

      e.preventDefault();
      //const filterBooks = books.filter((book) => {
      //book.title.toLowerCase().includes(this.state.search.toLowerCase());
      //});
      const filterBooks = books.filter(
        (book) => book.title.toLowerCase().includes(search.toLowerCase()) // Restituisce true o false per ogni libro
      );

      this.setState({ filtredBooks: filterBooks });
    };
    return (
      <div className="container-fluid">
        <div className=" d-flex justify-content-center">
          <Form className="mb-5 w-50 d-flex justify-content-center">
            <Form.Control
              className="w-50"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
            ></Form.Control>
            <Button onClick={search}>Cerca</Button>
          </Form>
        </div>
        <div className="row">
          {this.state.filtredBooks.map((book) => {
            return (
              <div className="col-3" key={book.asin}>
                <SingleBook book={book} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BookList;
