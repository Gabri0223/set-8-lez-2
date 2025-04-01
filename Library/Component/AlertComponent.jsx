import Alert from "react-bootstrap/Alert";
import AlertLink from "react-bootstrap/esm/AlertLink";

const myAlert = () => {
  return (
    <div>
      <Alert variant="dark">
        New offert on the way! <AlertLink href="#home">Check it out</AlertLink>.
      </Alert>
    </div>
  );
};

export default myAlert;
