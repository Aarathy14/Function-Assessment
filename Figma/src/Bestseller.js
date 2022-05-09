import React, { useState } from 'react'
import bag3 from './assest/bag3.jpg';
import sun1 from './assest/sun1.jpg';
import sun2 from './assest/sun2.jpg';
import shoe1 from './assest/shoe1.webp';
import bag2 from './assest/bag2.jpg';
import bag1 from './assest/bag1.webp';
import shoe2 from './assest/shoe2.jpg';
import shoe3 from './assest/shoe3.jpg';
import belt from './assest/belt.webp';
import belt1 from './assest/belt1.jpg';
import bow from './assest/bow.jpg';
import sun3 from './assest/sun3.jpg';
import "./Figma.css"
import { GoStar } from "react-icons/go";
import Blue from './Blue';


function Bestseller() {
    const[datas,setDatas]=useState([
      
        {
          

            id:1,
            img:bag3,
            title:"Da Milano",
            price:"$299,43",
            rate:"$534,33",
            offer:"24%off",
            catergory:"Bags"
        },
        {
            id:2,
            img:shoe1,
            title:"Adidas",
            price:"$299,43",
            rate:"$534,33",
            offer:"24%off",
            catergory:"Shoes" 
        },
        {
            id:3,
            img:shoe2,
            title:"Clarks ",
            price:"$299,43",
            rate:"$534,33",
            offer:"24%off",
            catergory:"Shoes"  
        },
        {
            id:4,
            img:shoe3,
            title:"Reebok ",
            price:"$299,43",
            rate:"$534,33",
            offer:"24%off",
            catergory:"Shoes"   
        },
        {
            id:5,
            img:bag1,
            title:"Louis",
            price:"$299,43",
            rate:"$534,33",
            offer:"24%off",
            catergory:"Bags"     
        },
        {
            id:6,
            img:sun1,
            title:"Moscot",
            price:"$299,43",
            rate:"$534,33",
            offer:"24%off",
            catergory:"Sunglasses"   
        },
        {
            id:7,
            img:sun2,
            title:"Burberry",
            price:"$299,43",
            rate:"$534,33",
            offer:"24%off",
            catergory:"Sunglasses"   
        },
       {
        id:8,
        img:belt,
        title:"Levi's",
        price:"$299,43",
        rate:"$534,33",
        offer:"24%off",
        catergory:"Belt"
       } ,
       {
        id:9,
        img:belt1,
        title:"Woodland",
        price:"$299,43",
        rate:"$534,33",
        offer:"24%off",
        catergory:"Belt"
       },
       {
        id:10,
        img:bag2,
        title:"TOOBA",
        price:"$299,43",
        rate:"$534,33",
        offer:"24%off",
        catergory:"Bags"
       },
       {
        id:11,
        img:bow,
        title:"Lee Cooper",
        price:"$299,43",
        rate:"$534,33",
        offer:"24%off",
        catergory:"Belt"
       },
       {
        id:6,
        img:sun3,
        title:"Carrera",
        price:"$299,43",
        rate:"$534,33",
        offer:"24%off",
        catergory:"Sunglasses"   
    },

    ])
    const[Datanew,setDatanew] =  useState(datas);
    const category = datas.map((list) => list.catergory);
    const uniquecategory = [...new Set (category)];
    uniquecategory.unshift("All");
    console.log(uniquecategory);
    const handleTab = (a) =>{
        console.log(a);
        if( a === "All"){
            setDatanew(datas);
            return;
        }
        const filteredData = datas.filter((data) => data.catergory === a);
        setDatanew(filteredData)
    }  
    return (
    <div className='overflow-hidden'>

<div className='my-5'> <h1> <center className="fs-bold ">Best Seller</center> </h1></div>
<center>
<div className='d-flex justify-content-evenly col-md-5 category1'>
    {uniquecategory.map((a,i) => (<span key={i} onClick={() => handleTab(a)} className='px-2 my-3 category2'>{a}</span>))}
</div>
</center>
<div  className="container">
    <div className='row'>
{Datanew.map((list,index)=>(
    <div className='col-3'>
        <div>
            <div className='row'>
                <div className='d-flex justify-content-around mt-5'>
            <div className='card  style=background-color: rgba(57, 192, 237, 0.2)'>
                <img src={list.img} height="250" width="100%" alt="images"/>
                <div className='card-body'>
                    <div className='card-title title1'><center>{list.title}</center></div>
                    <div className='d-flex justify-content-center'>
                
<GoStar color='#FFC600'/>
<GoStar color='#FFC600'/>
<GoStar color='#FFC600'/>
<GoStar color='#FFC600'/>
<GoStar color='#C1C8CE'/>

                         </div>
 <div className='d-flex'>
     <p className='ms-4 price1'> {list.price}</p> 
     <p className='ms-2 rate1 mt-1'>{list.rate}</p>
     <p className='ms-2 mt-1 offer1' >{list.offer}</p>
      </div>
        </div>
       </div> </div>     </div>
       </div>
    </div>
))}
    </div>
    <div> <center><label className='text-primary pt-5'>LOAD MORE</label><div className=' boder1 mb-5'></div></center> </div>
</div>
<Blue/>
    </div>
  
  )
}

export default Bestseller