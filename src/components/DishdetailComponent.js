import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
  
    renderDish(dish) {
  
        if (dish != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );

        else
            return(
                <div></div>
            );
    }

    renderComments(dishcomments) {

        const comments = dishcomments.map((comment) => {
            return (
            <li key={comment.id}><p>{comment.comment}</p><p>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></li>
            );
        });

        if (dishcomments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );

        else
            return(
                <div></div>
            );
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {/* making sure the dish was selected before rendering comments otherwise results in an error */}
                    {this.props.dish && this.renderComments(this.props.dish.comments)}
                </div>
            </div>

        );
       
    }
}

export default DishDetail;