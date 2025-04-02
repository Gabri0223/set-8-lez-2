import booksData from "../books/fantasy.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllTheBooks = () => {
  return (
    <div className="row">
      {booksData.map((book) => {
        return (
          <div className="col-3" key={book.title}>
            <Card style={{ height: "600px" }} className="mb-3">
              <Card.Img
                style={{ height: "350px" }}
                variant="top"
                src={book.img}
              />
              <Card.Body className=" d-flex flex-column justify-content-between">
                <Card.Title>{book.title} </Card.Title>
                <Card.Text>
                  {" "}
                  Questo fantastico libro costa{" "}
                  <span className="fw-bold">{book.price}</span>
                </Card.Text>
                <Button className="w-100" variant="dark">
                  Buy it
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default AllTheBooks;
