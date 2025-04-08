import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../Component/NavbarComponent.jsx";
import FooterComponent from "../Component/FooterComponent.jsx";
import AlertComponent from "../Component/AlertComponent.jsx";
import AllTheBooks from "../Component/AllTheBooks.jsx";
import SingleBook from "../Component/SingleBook.jsx";
import BookList from "../Component/BookList.jsx";
import booksData from "../books/fantasy.json";
import CommentArea from "../Component/CommentArea.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const abook = {
  title: "The Last Wish: Introducing the Witcher",
  img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
  price: "9.5",
};

const App = function () {
  const [book, setBook] = useState([]);

  const handleChange = (nuovoValore) => {
    setBook((prevState) => (prevState === nuovoValore ? [] : nuovoValore));
  };

  return (
    <div className="bg-dark text-light text-center">
      <NavbarComponent />
      <AlertComponent />
      <h1 className="mb-3">Esercizio carta singola</h1>
      <SingleBook book={abook} />
      <h1 className="mb-3 mt-5">Esercizio libreria</h1>
      <Container>
        <Row>
          <Col>
            <BookList books={booksData} cambioValore={handleChange} />
          </Col>
          <Col>
            <CommentArea id={book} />
          </Col>
        </Row>
      </Container>

      {/*<AllTheBooks />*/}
      <FooterComponent />
    </div>
  );
};

export default App;
