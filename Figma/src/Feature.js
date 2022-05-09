import React from 'react'
import three  from './assest/three.png';
import {AiFillStar } from "react-icons/ai";
import './Figma.css'

import Search from'./Search';
function Feature() {
  return (
   
        <div>
        <div>  <center><label className='fw-bold mt-5 ms-5 fs-3 mb-5'>FEATURE PRODUCT </label></center> </div>
        <div className='container'>
      <div className='row'>
      <div className='d-flex justify-content-around'>
          <div col-4>
          <div className='d-flex'>
          <img src={three}></img>
          <div>
          <div className='fs-4'>
          Blue Swade Nike <br/>
           Sneakers
          <div className='mt-2'>
          <AiFillStar color =" #FFC600" />
          <AiFillStar color =" #FFC600" />
          <AiFillStar color =" #FFC600" />
          <AiFillStar color =" #FFC600" />
          <AiFillStar/>
          </div>
          <div className='d-flex mt-2'>
          <div className='pink fw-bold'>
          $499
          </div>
          <div className='jan ms-2'>
          $599
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
        
          <div col-4>
          <div className='d-flex'>
          <img src={three}></img>
          <div>
          <div className='fs-4'>
          Blue Swade Nike 
          <br/>Sneakers
          <div className='mt-2'>
          <AiFillStar color =" #FFC600" />
          <AiFillStar color =" #FFC600" />
          <AiFillStar color =" #FFC600" />
          <AiFillStar color =" #FFC600" />
          <AiFillStar/>
          </div>
          <div className='d-flex mt-2'>
          <div className='pink fw-bold'>
          $499
          </div>
          <div className='jan ms-2'>
          $599
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>

          <div col-4>
          <div className='d-flex'>
          <img src={three}></img>
          <div>
          <div className='fs-4' >
          Blue Swade Nike <br/>Sneakers
          <div  className='mt-2'>
          <AiFillStar color =" #FFC600" />
          <AiFillStar color =" #FFC600" />
          <AiFillStar color =" #FFC600" />
          <AiFillStar color =" #FFC600" />
          <AiFillStar/>
          </div>
          <div className='d-flex mt-2 '>
          <div className='pink fw-bold '>
          $499
          </div>
          <div className='jan ms-2 '>
          $599
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
        
            
          
          </div>
          </div>
          </div>
          <Search/>
        </div>
       
   
  )
}

export default Feature