import { Dropdown } from "react-bootstrap";

import React from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import icon from "./assest/icon.PNG";
function Figma() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-none  shadow-none"
                  id="dropdown-basic"
                >
                 
                  EN{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/English">English</Dropdown.Item>
                  <Dropdown.Item href="#/Tamil">Tamil</Dropdown.Item>
                  <Dropdown.Item href="#/Korean">Korean</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div>
                {" "}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-none  shadow-none"
                    id="dropdown-basic"
                  >
                    {" "}
                    USD
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/India">India</Dropdown.Item>
                    <Dropdown.Item href="#/Korea">Korea</Dropdown.Item>
                    <Dropdown.Item href="#/London">London</Dropdown.Item>
                    <Dropdown.Item href="#/USA">USA</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="col-6 text-end">
            <span className="ms-5">
              {" "}
              <BsPerson /> My profile{" "}
            </span>

            <span className="ms-5">Item</span>
            <span className="ms-5">
              $0.00 <AiOutlineSearch />
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="d-flex">
            <div className="col-md-4 col-12">
              <img src={icon} width="40" height="40"></img>
              <span className="fw-bold">E-comm</span>
            </div>

            <div className="col-md-8 col-12">
              {" "}
              <div className="d-flex justify-content-evenly">
                <label>HOME</label>
                <label>BAG</label>
                <label>SNEAKERS </label>
                <label>BELT</label>
                <label>CONTACT</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Figma;
