import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
import '../DishDetail.css';

class DishDetail extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            comments: [
                    {
                        id : 0,
                        Author: "John Lemon",
                        Date : "Oct 17,2021",
                        Comment : "Imagine all the eatables, living in confusion",
                        parentId : 0
                    },
                    {
                        id : 1,
                        Author: "Michael Jaikishan",
                        Date : "Feb 14,2015",
                        Comment : "Eat it, Just eat it.",
                        parentId : 1
                    },
                    {
                        id : 2,
                        Author: "Michael Jordon",
                        Date : "Feb 14,2015",
                        Comment : "Imagine all the eatables, living in confusion. I love food alot and I just want to eat it, Just eat it.",
                        parentId : 0
                    },
                    {
                        id : 3,
                        Author: "Michael Jordon",
                        Date : "Feb 14,2015",
                        Comment : "I love food alot and I just want to eat it, Just eat it.",
                        parentId : 1
                    },
                    {
                        id : 4,
                        Author: "John Cena",
                        Date : "Apr 14,2018",
                        Comment : "Just Imagine it. How brilliant it looks!",
                        parentId : 2
                    },
                    {
                        id : 5,
                        Author: "Chris Jerico",
                        Date : "Feb 1,2015",
                        Comment : "Imagine all the eatables, living in confusion. I love food alot and I just want to eat it, Just eat it.",
                        parentId : 3
                    }
            ]
        };
    }
    renderComments(comments)
    {
        if(comments != null)
        return(
            <div>
                <h4>
                    Comments
                </h4>
                {comments.map((comment)=>
                {
                    return(
                    <ul class="list-unstyled">
                        <li>{comment.Comment}</li>
                        <li>{comment.Author} , {comment.Date}</li>
                    </ul>
                    );
                })}
            </div>       
        );
        else
        return(
            <div>
            </div>  
        );
    }

    renderDish(dish)
    {
        if(dish != null)
        {
            let dish_comments = this.state.comments.filter(comment => comment.parentId === dish.id);
            return(
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
        }
        else
        return(
            <div>
            </div>  
        );
    }

    render()
    {
        return(
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
            </div>
        );
        
    }
}

export default DishDetail;