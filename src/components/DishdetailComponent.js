import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "../DishDetail.css";

function RenderComments({ comments }) {
  if (comments != null)
    return (
      <div>
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <ul class="list-unstyled">
              <li>{comment.Comment}</li>
              <li>
                {comment.Author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.Date)))}
              </li>
            </ul>
          );
        })}
      </div>
    );
  else return <div></div>;
}

function RenderDish({ dish, comments }) {
  if (dish != null) {
    let dish_comments = comments.filter(
      (comment) => comment.parentId === dish.id
    );
    return (
      <React.Fragment>
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={dish_comments} />
        </div>
      </React.Fragment>
    );
  } else return <div></div>;
}

const DishDetail = ({ selectedDish, comments }) => {
  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={selectedDish} comments={comments} />
      </div>
    </div>
  );
};

export default DishDetail;
