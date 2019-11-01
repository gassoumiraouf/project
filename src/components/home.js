import React, { Component } from 'react';
import Slider from './slider';
import Products from'./products';
import Side from './side'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            
           <Slider/>
           <div className='d-flex'>
           <Side />
           <div className='container'><h2 className='ads'>Featured Ads: </h2>
           

           <Products />
     </div></div>
        </div>  );
    }
}
 
export default Home;