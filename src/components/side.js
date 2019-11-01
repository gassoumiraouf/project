import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faTrademark, faMobile, faTshirt } from '@fortawesome/free-solid-svg-icons';

 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
class Side extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='side'>
      <ListGroup>
  <ListGroup.Item className='item'><FontAwesomeIcon icon={faTrademark}/> All Categories</ListGroup.Item>
  <ListGroup.Item className='item' action variant="primary"><FontAwesomeIcon icon={faCar}/>  Vehicles</ListGroup.Item >
  <ListGroup.Item className='item' action variant="secondary">
  <FontAwesomeIcon icon={faHome}/> House and Garden
  </ListGroup.Item >
  <ListGroup.Item className='item' action variant="success">
  <FontAwesomeIcon icon={faMobile}/>  Computers and Multimedia
  </ListGroup.Item >
  <ListGroup.Item className='item' action variant="danger">
  <FontAwesomeIcon icon={faTshirt}/> Clothing and well Being
  </ListGroup.Item >
  <ListGroup.Item className='item' action variant="warning">
    Other
  </ListGroup.Item >
  
</ListGroup>
        </div> );
    }
}
 
export default Side;