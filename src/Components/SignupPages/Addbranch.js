import React from "react";
import { NavLink } from 'react-router-dom';

const Addbranch = () => {
  return (
    <>
      <div className="row  bg-light contantfixwh ">

        <div className="col-md-12 col-xl-12 col-sm-12 justify-content-center align-items-center d-flex ">
          <div class="card text-white borderradi">
            <div class="row g-0">
              <div class="col-md-6 col-xl-6 detalistext">
                <div class="carousel-item active">
                  <img src="/assets/images/Addbranch.png" class="d-block w-100" alt="img" />
                  <div class=" carousel-caption">
                    <h4>Organize your work<br></br>at one place </h4>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-6 col-sm-12 text-center p-5 ">
                <img src="/assets/images/logo.png" class="img-fluid rounded-start mb-5" alt="img" />
                <div className="row d-flex">
                <h3 class="card-title mb-3 col-xl-6 col-md-6">Add Branch</h3>
                <p  className="col-xl-6 col-md-6">Add More</p>
                </div>
                  <div className="row g-0 ">
                    <div className="col-md-9  col-xl-9  col-sm-9 p-2">
                      <input type="text" className="form-control inputfocus mb-4" placeholder="Branch 1 Name" />
                      <input type="text" className="form-control inputfocus mb-4" placeholder="Branch 2 Name" />
                      <input type="text" className="form-control inputfocus mb-4" placeholder="Branch 3 Name" />
                    </div>

                    <div className="col-md-3 col-xl-3  col-sm-3 p-2">
                      <select class="form-select inputfocus mb-4" aria-label="Default select example">
                        <option selected>city</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <select class="form-select inputfocus mb-4" aria-label="Default select example">
                        <option selected>city</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <select class="form-select inputfocus mb-4" aria-label="Default select example">
                        <option selected>city</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <NavLink to="/AddLogo/" style={{ textDecoration: 'none' }}> <div className="d-grid gap-2 col-xl-9 col-md-6 col-sm-6 mx-auto ">
                     <button className="btn buttonfocuscolor" type="button" >SAVE & NEXT</button>
                    </div></NavLink>

                 </div>
              
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  );
}


export default Addbranch;