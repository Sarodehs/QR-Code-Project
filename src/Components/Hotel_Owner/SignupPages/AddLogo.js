import React from "react";
import { NavLink } from 'react-router-dom';

const AddLogo = () => {
  return (
    <>
      <div className="row  bg-light contantfixwh ">
       
        <div className="col-md-12 col-xl-12 col-sm-12 justify-content-center align-items-center d-flex ">
          <div class="card text-white borderradi">
            <div class="row g-0">
            <h4 className=" m-3">Add Restaurant Logo </h4>
                <p className=" m-3">Its Very Easy</p>
              <div class="col-md-6 col-xl-5 ">
               
                <div class="carousel-item active  ">
                  <img src="/assets/images/AddLogo.png" class="d-block w-100  m-3" alt="img" />
                  <div class=" carousel-caption text-center text-dark ">

                    <h4 className="">Drag & Drop Image Here</h4>
                    <p className="">(Supported .PNG  .SVG  .jpg)</p>


                    <input type="file"/>
                    
                    <p className="">On your Computer</p>


                    <p className="">Max file size 5MB</p>


                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-7 col-sm-12 text-center  p-5 ">

                <div class=" mb-3 pb-5 pb-5" >
                  <div class="row g-0 d-flex">
                    <div class="col-md-2">
                      <span class="material-icons-outlined text-muted fs-1">insert_photo</span>
                    </div>
                    <div class="col-md-8">
                      <h5>Aanand veg Logo.PNG</h5>
                      <p>PNG . 2.2MB</p>
                    </div>
                    <div class="col-md-2">
                      <span class="material-icons-outlined">close</span>
                    </div>
                  </div>
                </div>

                <NavLink to="" style={{ textDecoration: 'none' }}> <div className="d-grid gap-2 pt-5 pt-5 p-5 col-xl-9 col-md-6 col-sm-6 mx-auto ">
                  <button className="btn btn-warning buttonfocuscolor" type="button" >UPLODE</button>
                </div></NavLink>
                <p>or</p>
                <NavLink to="/Generateqrcode/" style={{ color: 'orange', textDecoration: 'none' }}> <div className="d-grid p-5 gap-2 col-xl-12 col-md-6 col-sm-6 mx-auto ">
                  <p>Continue without logo</p>
                </div></NavLink>
              </div>
            </div>
          </div>
        </div>
       
      </div>


    </>
  );
}


export default AddLogo;