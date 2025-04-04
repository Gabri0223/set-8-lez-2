import Form from "react-bootstrap/Form";

const AddComment = () => {
  return (
    <div className="comment-area">
      <Form>
        <Form.Label>Vuoi aggiungere un commento?</Form.Label>
        <Form.Control></Form.Control>
      </Form>
    </div>
  );
};

export default AddComment;
