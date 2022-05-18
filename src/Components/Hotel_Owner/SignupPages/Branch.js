import React from "react";
import { NavLink } from 'react-router-dom';

const Branch = () => {
    return (
        <>
        <div className="row  bg-light contantfixwh ">
      
        <div className="col-md-12 col-xl-12 col-sm-12 justify-content-center align-items-center d-flex p-5">
          <div class="card text-white borderradi">
            <div class="row g-0 ">
              <div class="col-md-6 col-xl-6 ">
                <div class="carousel-item active">
                  <img src="/assets/images/Branch.png" class="d-block w-100 h-100" alt="img" />
                  
                </div>
              </div>
              <div class="col-md-6 col-xl-6 col-sm-12 text-center  ">
                <img src="/assets/images/logo.png" class="img-fluid rounded-start  m-5" alt="img" />
                
                <h4 className="m-4">Do you have multiple branches?</h4>
                  <div className="row g-0 mt-5 mt-5 d-flex">
                    <div className="col-md-3 col-xl-6  col-sm-12 ">

                    <NavLink to="/Addbranch/" style={{ textDecoration: 'none' }}> 
                    <div className="d-grid gap-2 col-xl-6 col-md-6 col-sm-6 mx-auto ">
                      <button className="btn btn-warning buttonfocuscolor" type="button" >YES</button>
                    </div>
                    </NavLink>

                    </div>
                 
                    <div className="col-md-3 col-xl-6 col-sm-12 ">

                    <NavLink to="/AddLogo/" style={{ textDecoration: 'none' }}> 
                    <div className="d-grid gap-2 col-xl-6 col-md-6 col-sm-6 mx-auto ">
                      <button className="btn btn-outline-warning buttonfocuscolor1" type="button" >NO</button>
                    </div>
                    </NavLink>
                    
                    </div>
                  </div>
              </div>
               

              </div>
            </div>
         
        </div>
      
      </div>

        </>
    );
}


export default Branch;