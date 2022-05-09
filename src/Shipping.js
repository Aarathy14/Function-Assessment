import React from 'react'
import shipping  from './assest/shipping.png';
import dollar  from './assest/dollar.png';
import person  from './assest/person.png';
import Logo from './Logo';
import './Figma.css'
function Shipping() {
  return (
    <div>
      <div>
    <div  className='d-flex justify-content-around mt-5' >  
    <img src={shipping}></img>
    <img src={dollar}></img>
    <img src={person}></img>
    </div>
    <div className='d-flex justify-content-around mt-5 fw-bold'>
  <label>FREE SHIPPING</label>  
   <label> 100% REFUND</label>
   <label> SUPPORT 24/7</label>
    </div>
    <div className='d-flex justify-content-around mt-1 para'>
        <label>Lorem Ipsum is simply <br/>dummy text of the<br/> printing and typesetting<br/> industry.</label>
        <label>Lorem Ipsum is simply <br/>dummy text of the<br/> printing and typesetting<br/> industry.</label>
        <labe>Lorem Ipsum is simply <br/>dummy text of the<br/> printing and typesetting<br/> industry.</labe>
    </div>
    </div>
    <Logo/>
    </div>
  )
}

export default Shipping
