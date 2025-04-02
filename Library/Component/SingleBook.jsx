import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class BookCard extends Component {
  state = {
    selected: false,
  };
  render() {
    const { book } = this.props;
    return (
      <div className="d-flex align-items-center flex-column mb-3">
        <Card
          onClick={(e) => {
            this.setState({ selected: !this.state.selected });
          }}
          style={{
            border: this.state.selected ? "2px solid yellow" : "2px solid grey",
            height: "600px",
          }}
        >
          <Card.Img variant="top" src={book.img} style={{ height: "400px" }} />
          <Card.Body className="bg-dark text-light d-flex flex-column justify-content-between">
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Questo fantastico libro costa{" "}
              <span className="fw-bold">{book.price}$</span>
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
