import React from 'react'
import './Figma.css'
import Follow from './Follow'
function Search() {
  return (
    <div>
                         <div >
               <center> <input type="text" className='email1 mt-5 ' placeholder='Search Query...'></input>
               <button className=" search btn btn-info  ">Search</button> </center>
 </div>
 <Follow/>
    </div>
  )
}

export default Search
