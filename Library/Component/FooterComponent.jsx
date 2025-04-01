import Container from "react-bootstrap/esm/Container";

const myFootter = () => {
  return (
    <footer>
      <Container fluid className=" bg-black">
        <div className="row">
          <div className="col text-center text-secondary">
            <small>© 2023 Faketrinelli. All rights reserved.</small>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default myFootter;
