import { useEffect, useState } from "react";
import AddComment from "../Component/AddComment";
import CommentList from "../Component/CommentList";

const Url = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentArea = function ({ id }) {
  const [comments, setComments] = useState([]);

  const GetComment = () => {
    if (id.length === 0) {
      setComments([]);
      return;
    }

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
        setComments(comments);
      });
  };

  useEffect(() => {
    GetComment();
  }, [id]);

  return (
    <div>
      <AddComment />
      <CommentList comment={comments} asin={id} />
    </div>
  );
};

export default CommentArea;
