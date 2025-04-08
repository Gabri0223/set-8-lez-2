import { useEffect, useState } from "react";
import AddComment from "../Component/AddComment";
import CommentList from "../Component/CommentList";
import { Component } from "react";

const Url = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  GetComment = () => {
    const id = this.props.id;
    fetch(Url + "/" + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOTFjOTk0OTJlNDAwMTVlN2M3MjQiLCJpYXQiOjE3NDM2ODgxMzcsImV4cCI6MTc0NDg5NzczN30.BNR1MYVQJeLktPrxfhqvxJ0p24_RmYkwqE_Nd6xgGLg",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((books) => {
        const comments = books.map((libro) => libro.comment);
        this.setState({ comments });
      });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.id !== prevProps.id) {
      this.GetComment();
    }
  };
  render() {
    return (
      <div>
        <AddComment />
        <CommentList comment={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
