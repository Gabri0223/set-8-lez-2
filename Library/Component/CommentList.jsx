import ListGroup from "react-bootstrap/ListGroup";

const CommentList = ({ comment }) => {
  console.log(comment);
  return (
    <ListGroup>
      {comment.map((commento) => {
        console.log(commento);
        return (
          <div>
            <ListGroup.Item>{commento}</ListGroup.Item>
          </div>
        );
      })}
    </ListGroup>
  );
};

export default CommentList;
