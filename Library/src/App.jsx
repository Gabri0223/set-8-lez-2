import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../Component/NavbarComponent.jsx";
import FooterComponent from "../Component/FooterComponent.jsx";
import AlertComponent from "../Component/AlertComponent.jsx";
import AllTheBooks from "../Component/AllTheBooks.jsx";
import SingleBook from "../Component/SingleBook.jsx";
import BookList from "../Component/BookList.jsx";
import booksData from "../books/fantasy.json";

const abook = {
  title: "The Last Wish: Introducing the Witcher",
  img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
  price: "9.5",
};

function App() {
  return (
    <div className="bg-dark text-light text-center">
      <NavbarComponent />
      <AlertComponent />
      <h1 className="mb-3">Esercizio carta singola</h1>
      <SingleBook book={abook} />
      <h1 className="mb-3 mt-5">Esercizio libreria</h1>
      <BookList books={booksData} />
      {/*<AllTheBooks />*/}
      <FooterComponent />
    </div>
  );
}

export default App;
