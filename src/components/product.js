import React, { Component } from 'react';
import { Card, Button} from'react-bootstrap';
import { Link } from 'react-router-dom';
import SuggestButton from './suggestButton'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      const product = this.props.productItem;
        return (<div className=''>
           
<Card   className='card ' key={product.id}>
  <Card.Img className='product-image' variant="top" src={product.image} />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
      i want to swap it with <span><strong>{product.swapWith}</strong></span>
    </Card.Text>
    <div className='d-flex justify-content-between'>
    <Link to={`/prod/${product.id}`}><Button variant="primary">More details</Button></Link>
    <SuggestButton product={product}/>
    </div>
  </Card.Body>
</Card>
        </div>  );
    }
}
 
export default Product;