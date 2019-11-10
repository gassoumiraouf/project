import React from 'react';
import {Navbar, Nav, Form, Button, FormControl, ButtonToolbar} from 'react-bootstrap';
import './App.css';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';
import logo from './pics/logo.png';
import Home from './components/home';
import CreateAd from './components/createAd'
import ProductDetails from './components/ProductDetails'
import SignIn from './components/signIn';
import SignUp from'./components/signUp';
import Contact from './components/contact';
import AboutUS from './components/aboutUs'


function App() {
  return ( <Router>
    <div className="App">
     <header>
       <Navbar bg="dark" variant="dark" fixed="top" expand='lg' >
    <Navbar.Brand ><Link style={{ color: 'inherit', textDecoration: 'inherit'}}
     to ='/'><img className='logo' src={logo} alt='logo'/> The Swap Shop </Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link > <Link to ='/'>Home</Link></Nav.Link>
      <Nav.Link ><Link style={{ color: 'inherit', textDecoration: 'inherit'}}
     to ='/about-us'>about Us</Link></Nav.Link>
      <Nav.Link ><Link style={{ color: 'inherit', textDecoration: 'inherit'}}
     to ='/contact'>Contact</Link></Nav.Link>
    </Nav>
     <Button className='sign btnad' variant="danger"><Link style={{ color: 'inherit', textDecoration: 'inherit'}}
       to='/createAd'>Create Ad</Link></Button> 
    <Form inline>
      
      <Button className='sign' variant="primary"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} 
      to ='/signIn'>Sign In </Link></Button>
       
     
      
    </Form></Navbar.Collapse>
  </Navbar>
  </header>

  
    </div>
    <div>
      <Route exact path='/' component={Home}></Route>
      <Route path='/createAd' component={CreateAd}></Route>
      <Route path='/about-us' component={AboutUS}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route exact path='/signIn' component ={SignIn}></Route>
      <Route path='/signIn/signUp' component ={SignUp}></Route>
      <Route path='/prod/:id' component ={ProductDetails}></Route>
    </div>
    </Router>
  );
}

export default App;
