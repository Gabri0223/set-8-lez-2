import Carousel from "react-bootstrap/Carousel";

const CommentList = ({ comment }) => {
  console.log(comment);
  return (
    <Carousel className="mt-5">
      {comment.map((commento) => {
        console.log(commento);
        return (
          <Carousel.Item style={{ height: "125px" }}>
            <Carousel.Caption>
              <p>{commento}</p>
            </Carousel.Caption>{" "}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CommentList;
