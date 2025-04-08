import ListGroup from "react-bootstrap/ListGroup";
import { Component } from "react";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comment.map((commento) => {
          return (
            <div>
              <ListGroup.Item>{commento}</ListGroup.Item>
            </div>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentList;
