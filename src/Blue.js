import React from 'react'
import sideshoe from './assest/sideshoe.png';
import './Figma.css'
import Shipping from './Shipping';
function Blue() {
  return (
    <div>
      <div className='blue'>
    <div className='row'>
   <div className='col-6'>
 
  
    <label className=' running pt-5 px-5 mx-5 mt-5 '> Adidas Men Running
   Sneakers</label>
  <p className='design mx-5 px-5  pt-5 pb-2'> Performance and design. Taken right to the edge.</p>
  <p className='now  mx-5 px-5 '>SHOP NOW</p>
  <div className='boder2'></div>
      
   </div>

   <div className=' col-6'>
    
   <img src={sideshoe} width='100%' className='shoes'/>
   </div>
    </div>
   
    </div>
     <Shipping/>
     </div>
  )
}

export default Blue