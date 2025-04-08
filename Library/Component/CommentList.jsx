import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";

const CommentList = function ({ comment, asin }) {
  return (
    <ListGroup>
      {comment.map((commento) => {
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
