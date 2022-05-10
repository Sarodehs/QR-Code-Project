import React from "react";
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="row  bg-light contantfixwh">
        
        <div className="col-md-12 col-xl-12 col-sm-12 justify-content-center align-items-center d-flex p-5">
          <div class="card text-white borderradi">
            <div class="row g-0">
              <div class="col-md-6 col-xl-6 ">
               <div class="carousel-item active">
                  <img src="../assets/images/Signup.png" class="d-block w-100" alt="img" />
                  <div class="carousel-caption ">
                    <div  className="justify-content-start align-items-start d-flex">
                      <h5>Modern. </h5>
                    </div>
                    <div className="justify-content-center align-items-center d-flex">
                    <h5>Accessible. </h5>
                    </div>
                    <div className="justify-content-end align-items-end d-flex">
                    <h5> Affordable. </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-6 col-sm-12 text-center p-5 ">
                <img src="../assets/images/logo.png" class="img-fluid rounded-start mb-5" alt="img" />
                <h5 class="card-title mb-5">Sign up to your account</h5>
                <div className="mb-5">
                  <input type="text" class="form-control inputfocus" placeholder="Email/Mobile" aria-label="text" aria-describedby="basic-addon2" />
                </div>
                <div class="input-group ">
                  <input type="password" class="form-control inputfocus" placeholder="Recipient's username" aria-label="Password" aria-describedby="basic-addon2" />
                  <button class="btn btn-light inputfocus d-flex" type="button" id="button-addon2"><span class="material-icons-outlined">visibility_off</span></button>
                </div>
                <div >
                  <a href="/" className="align-items-end justify-content-end d-flex p-3" style={{ color: 'orange' }}>forgot password?</a>
                </div>
                <NavLink to="/Details/"  style={{ textDecoration: 'none' }}> <div className="d-grid gap-2 col-xl-12 col-md-6 col-sm-6 mx-auto ">
               <button className="btn buttonfocuscolor" type="button" >SIGN UP</button>
                </div></NavLink>

              </div>
            </div>
          </div>
        </div>
       
      </div>

    </>
  );
}


export default Signup;