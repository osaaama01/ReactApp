import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "../DishDetail.css";

class DishDetail extends Component {
  renderComments(comments) {
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

  renderDish(dish) {
    if (dish != null) {
      let dish_comments = this.props.comments.filter(
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
            {this.renderComments(dish_comments)}
          </div>
        </React.Fragment>
      );
    } else return <div></div>;
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderDish(this.props.selectedDish)}</div>
      </div>
    );
  }
}

export default DishDetail;
