import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    search: "",
    filtredBooks: this.props.books,
    selectedAsin: "",
  };

  handleSelection = (asin) => {
    this.setState((prevState) => ({
      selectedAsin: prevState.selectedAsin === asin ? null : asin,
    }));
    this.props.cambioValore(asin);
  };

  render() {
    const { books } = this.props;

    const search = (e) => {
      const { search } = this.state;

      e.preventDefault();

      const filterBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );

      this.setState({ filtredBooks: filterBooks });
    };
    return (
      <div className="container-fluid">
        <div className=" d-flex justify-content-center">
          <Form className="mb-5 w-100 d-flex justify-content-center">
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
              <div className="col-6" key={book.asin}>
                <SingleBook
                  book={book}
                  isSelected={this.state.selectedAsin === book.asin}
                  onSelect={this.handleSelection}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BookList;
