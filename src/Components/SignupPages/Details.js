import React from "react";
import { NavLink } from 'react-router-dom';

const Details = () => {
  return (
    <>
      <div className="row  bg-light contantfixwh ">
 
        <div className="col-md-12 col-xl-12 col-sm-12 justify-content-center align-items-center d-flex ">
          <div class="card text-white borderradi">
            <div class="row g-0">
              <div class="col-md-6 col-xl-6 detalistext">
                <div class="carousel-item active">
                  <img src="../assets/images/details.png" class="d-block w-100" alt="img" />
                  <div class=" carousel-caption">
                    <h4>Simplify the way<br /> you work!. </h4>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-6 col-sm-12 text-center p-5 ">
                <img src="../assets/images/logo.png" class="img-fluid rounded-start mb-5" alt="img" />
                <h5 class="card-title mb-3">Enter your details</h5>
                <div className="mb-3">
                  <input type="text" class="form-control inputfocus" placeholder="Owner Name" aria-label="text" aria-describedby="basic-addon2" />
                </div>
                <div className="mb-3">
                  <input type="text" class="form-control inputfocus" placeholder="Restaurant Name" aria-label="text" aria-describedby="basic-addon2" />
                </div>
                <div className="mb-3">
                  <input type="text" class="form-control inputfocus" placeholder="Hotel Address Line 01" aria-label="text" aria-describedby="basic-addon2" />
                </div>
                <div className="mb-3">
                  <input type="text" class="form-control inputfocus" placeholder="Hotel Address Line 02" aria-label="Password" aria-describedby="basic-addon2" />
                </div>
                <div className="">
                  <div className="row g-0 ">
                    <div className="col-md-3 col-xl-5  col-sm-3 ">
                      <select class="form-select inputfocus mb-4" aria-label="Default select example">
                        <option selected>city</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-md-3 col-xl-2  col-sm-3 "></div>
                    <div className="col-md-3 col-xl-5 col-sm-3 ">
                      <select class="form-select inputfocus mb-4" aria-label="Default select example">
                        <option selected>State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <NavLink to="/Branch/" style={{ textDecoration: 'none' }}> <div className="d-grid gap-2 col-xl-12 col-md-6 col-sm-6 mx-auto ">
                  <button className="btn buttonfocuscolor" type="button" >SAVE & NEXT</button>
                </div></NavLink>

              </div>
            </div>
          </div>
        </div>
 
      </div>

    </>
  );
}


export default Details;