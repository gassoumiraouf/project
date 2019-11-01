import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='container'>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p>you don't have an account? sign up here: </p>
  <Button variant="primary" type="submit">
   <Link to='/signIn/signUp' style={{ color: 'inherit', textDecoration: 'inherit'}}>Sign Up</Link>  
  </Button>
  
</Form>

        </div> );
    }
}
 
export default SignIn;