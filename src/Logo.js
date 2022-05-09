import React from 'react'
import logo  from './assest/logo.png';
import logo1  from './assest/logo1.png';
import logo2  from './assest/logo2.png';
import Feature from './Feature';
import './Figma.css'

function Logo() {
  return (
    <div>
        
      <div>  <center><label className='fw-bold mt-5 ms-5 fs-3 mb-5'>LASTEST NEW </label></center> </div>

    <div className='container'>
      <div className='row'>
      <div className='d-flex justify-content-around'>
        <div className='col-4'>
          <div className='d-flex'>
       
         <img src={logo}></img>
        <div>
        <div className='jan'>01 Jan, 2015</div>
        <div className='fw-bold'> Fashion Industry</div>
        <div>
        Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry. </div> </div>
         </div>
        </div>

        <div className='col-4 '>
          <div className='d-flex '>
    <img src={logo1}></img>
    <div>
    <div className="jan">01 Jan, 2015</div>
    <div className='fw-bold'>Fashion Industry </div>
    Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry.
    </div>
    </div>
    </div>
      
    <div className='col-4'>
      <div className='d-flex'>
    <img src={logo2}></img>
    <div>
    <div className ="jan">01 Jan, 2015</div>
    <div className="fw-bold"> Fashion Industry</div> 
    <div>
    Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry.
    </div></div>
    </div>
    </div>
        </div>
        </div>
        </div>
        <Feature/>
     </div>
     
  )
}

export default Logo