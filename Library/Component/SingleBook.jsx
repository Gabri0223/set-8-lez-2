import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";
import CommentArea from "../Component/CommentArea";

class BookCard extends Component {
  state = {
    selected: false,
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevState.selected);
    console.log(this.state.selected);
    if (this.state.selected !== prevState.selected) {
      console.log(this.props.book.asin);
      this.props.cambioValore(this.props.book.asin);
    }
  };
  render() {
    const { book } = this.props;
    const id = book.asin;

    return (
      <div className="d-flex align-items-center flex-column mb-3">
        <Card
          style={{
            border: this.state.selected ? "2px solid yellow" : "2px solid grey",
            height: this.state.selected ? "800px" : "600px",
          }}
        >
          <Card.Img
            variant="top"
            src={book.img}
            style={{ height: "400px" }}
            onClick={(e) => {
              this.setState({ selected: !this.state.selected });
            }}
          />
          <Card.Body className="bg-dark text-light d-flex flex-column justify-content-between">
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Questo fantastico libro costa{" "}
              <span className="fw-bold">{book.price}$</span>
              {this.state.selected === true && (
                <>{console.log("Passing id to CommentArea:", book)}</>
              )}
            </Card.Text>
            <Button className="w-100" variant="light">
              Buy it
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default BookCard;

//function BasicExample({ book }) {
//return (
//<div className="d-flex align-items-center flex-column mb-3">
//<Card>
//<Card.Img variant="top" src={book.img} />
//<Card.Body>
//<Card.Title>{book.title}</Card.Title>
//<Card.Text>
// Questo fantastico libro costa{" "}
//<span className="fw-bold">{book.price}$</span>
// </Card.Text>
//<Button className="w-100" variant="dark">
//Buy it
//</Button>
//</Card.Body>
//</Card>
//</div>
//);
//}
//export default BasicExample;
