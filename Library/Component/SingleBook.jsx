import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample(book) {
  return (
    <div className="d-flex align-items-center flex-column mb-3">
      <h1 className="mb-3">Esercizio carta singola</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Questo fantastico libro costa{" "}
            <span className="fw-bold">{book.price}$</span>
          </Card.Text>
          <Button className="w-100" variant="dark">
            Buy it
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BasicExample;
