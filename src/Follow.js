import React from 'react'
import {FaTwitter} from "react-icons/fa";
import {ImFacebook} from "react-icons/im";
import Ecom1 from "./assest/Ecom1.png";
import Capture from "./assest/Capture.PNG";
import  './Figma.css'


import './Figma1.css'
function Follow() {
  return (
    <div>
        <div className='rectangle pt-5 mt-5'>
            <div className='d-flex justify-content-around mt-5'>
                <div>
                
          <img src ={Ecom1} ></img>

          <label className='fw-bold '>E-Comm</label>
          <div className='para2 mt-2 ms-3'>
              Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry. 
              Lorem<br/> Ipsum has been the industry's standard <br/>dummy text ever.
              Since the 1500s, when<br/> an unknown printer.</div>  </div>
<div>
<div className=' comm2 fw-bold '> FOLLOW US</div>
<div className='para2 mt-2'>
Since the 1500s, when an unknown <br/>printer took a galley of type and <br/>scrambled.</div>
<div className='mt-2 '>
< ImFacebook size="25"  color='#385C8E'/>

<label className='ms-5 '><FaTwitter size ="25" color='#03A9F4'/></label></div>
</div>
<div>
    <label className='fw-bold'>Contact Us</label>
    <div className='mt-2  para2'>E-Comm , 4578 <br/>Marmora Road, <br/>Glasgow D04 89GR</div>
</div>
          
        </div>
        <div className='d-flex justify-content-around mt-5'>
   <div>
    <label className='fw-bold mb-4'> Infomation</label> <br/>   

     About Us   <br/>
     Infomation <br/>
     Privacy Policy<br/>
Terms & Conditions
            </div>
            <div>
    <label className='fw-bold mb-4'>Service</label>  <br/>  

     About Us   <br/>
     Infomation <br/>
     Privacy Policy<br/>
Terms & Conditions
            </div>
            <div>
    <label className='fw-bold mb-4'> My Account</label>    <br/>

     About Us   <br/>
     Infomation <br/>
     Privacy Policy<br/>
Terms & Conditions
            </div>
            <div>
    <label className='fw-bold mb-4'> Our Offers</label>   <br/> 

     About Us   <br/>
     Infomation <br/>
     Privacy Policy<br/>
Terms & Conditions
            </div>
            </div>
            <center>
            <div className='bigline my-5'>
            <div className='d-flex justify-content-between'>
                <div className='grey'>
© 2018 Ecommerce theme by www.bisenbaev.com</div>
<div>
    <img src={Capture} width="100px"></img>
</div>
</div>
</div></center>

            </div>

    </div>
  )
}

export default Follow