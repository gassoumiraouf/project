import React, { Component } from 'react';
import {connect} from 'react-redux'
import Product from './product';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( <div className='container justify-content-between d-flex flex-wrap'>
          
        {this.props.productArray.products.map(product =>  (<Product productItem={product}/>) )} 
        </div> );
    }
}
const mapStateToProps=state=>{
    return {
        productArray:state.product
    }
   
}
 
export default connect (mapStateToProps) (Products);