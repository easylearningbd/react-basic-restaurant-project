import React from "react";
import { Card } from "react-bootstrap";

const DishDetail = props => {
     return (
          <div>

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src={props.dish.image} />
  <Card.Body>
    <Card.Title>{props.dish.name}</Card.Title>
    <Card.Text>
    {props.dish.description}
    </Card.Text>
    <p><b>Price : {props.dish.price}</b></p>
    <p><b>Label : {props.dish.label}</b></p>
    <p><b>Category : {props.dish.category}</b></p>
    
  </Card.Body>
</Card>
                
          </div>
     )
}

export default DishDetail;