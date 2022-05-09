import React from "react";
import "./Figma1.css";
import Product1 from "./assest/Product1.jpg";
import Product from "./assest/Product.jpg";
import Product2 from "./assest/Product2.png";
import Bestseller from "./Bestseller";
function Figma1() {
  return (
    <div className="shoe">
      <div className="container">
        <div className="texty fs-1">
          Super Flash Sale
          <br />
          50% Off
        </div>
        <div>
          <div className="row">
            <div className=" card1 col-md-4 mt-2 px-0">
            <div className="card customCard">
                <div class="card-body">
                  <h5 class="card-title">FS - QUILTED MAXI <br/>CROSS BAG  </h5>
                  <img src={Product1} width="99%" height="220px"/>
                  <p className="discount"> $534,33  <label className="off">24% Off</label>  </p>
                  <p className=" dollor card1 text-end"> $299</p>
                </div>
              </div>
            </div>
            <div className=" col-md-4 mt-2 px-0">
            <div className="card">
                <div class="card-body">
                  
                  <h5 class="card-title d-flex justify-content-between">FS - QUILTED MAXI<br/> CROSS BAG  <p className="dollor"> $299</p></h5>
                 
                  <img src={Product2} width='100%' height="266px" />
                  <p className=" discount"> $534,33<label className="off">24% Off</label> </p>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-2 px-0">
            <div className="card">
                <div class="card-body">
                  <h5 class="card-title">FS - QUILTED MAXI <br/>CROSS BAG</h5>
                  <p className="discount"> $534,33 <label className="off">24% Off</label></p>
                  <img src={Product} width="97%" height="220px" />
                  <p className=" dollor text-end"> $299</p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Bestseller/>
    
    </div>
  );
}

export default Figma1;
