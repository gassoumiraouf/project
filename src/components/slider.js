import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import swap1 from '../pics/swap1.jpg';
import swap2 from '../pics/swap2.jpg';
import swap3 from '../pics/swap3.jpg';

const Slider = () => {
    return ( <div >
        
         <Carousel className=' '>
  <Carousel.Item>
    <img
      className="d-block w-100 image-slide"
      src={swap1}
      alt="First slide"
    />
    <Carousel.Caption>
     
      <p>Here is a website where you can find plenty of traders</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image-slide"
      src={swap2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Swap shop</h3>
      <p>The first website in Tunisia for swapping</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image-slide"
      src={swap3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
</div>
     );
}
 
export default Slider;