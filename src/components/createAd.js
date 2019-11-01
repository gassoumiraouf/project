import React, { Component } from 'react';
import {InputGroup, FormControl, DropdownButton, Dropdown, Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addProduct} from '../actions/actions';
import shortid from 'shortid';
class CreateAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:{}
          }
          
          }
       

        handleChange = e =>{
            this.setState({ product: {...this.state.product, [e.target.name]: e.target.value}})
        }              

         Ajout =()=>{
             this.props.addNewProduct({...this.state.product, id:shortid.generate()})
             this.setState({ product: {} });
             this.props.history.push('/')
         }
                            
    render() { 
       
        return ( <div className='container'>
            <h2>Add an ad: </h2><br/>
            <div className='container'>  
            <InputGroup size="md">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg" >ad title: </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="title" aria-label="Large" onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <br/>
  
            <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text>product description: </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="description" as="textarea" aria-label="With textarea" onChange={this.handleChange} />
            </InputGroup> <br/>

            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control name="category" as="select" onChange={this.handleChange} value={this.state.category}>
            <option>Choose Category</option>
            <option value="Vehicles">Vehicles</option>
            <option value="House and garden">House and garden</option>
            <option value='Computers and Multimedia'>Computers and Multimedia</option>
            <option value='Clothing and well being'>Clothing and well being</option>
            <option value='Other'>Other</option>
            </Form.Control>
            </Form.Group>
        
            <InputGroup size="md">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">I want to swap my product with:  </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="swapWith" aria-label="Large" onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
            </InputGroup><br/>

            <InputGroup size="md">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">Link to image:   </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="image" aria-label="Large" onChange={this.handleChange} aria-describedby="inputGroup-sizing-sm" />
            </InputGroup><br/>
        
            <Button variant="primary" onClick={this.Ajout}>Submit</Button>
            </div>
            </div> );
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        addNewProduct: newProduct => dispatch(addProduct(newProduct))
    }
}

 
export default connect (null,mapDispatchToProps) (CreateAd);