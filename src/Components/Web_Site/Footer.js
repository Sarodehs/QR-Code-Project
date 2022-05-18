import React from "react";
import { NavLink } from "react-router-dom";
const box = {
    color: "white",
    width: '85%', 
    margin: '0% 0% 0% 7%'
}

const Footer = () => {
    return(
        <>
            {/* <!-- footer start --> */}
            <div class="webfooter mt-5 pt-5">

                {/* <!-- upper part of footer --> */}
                <div class="mx-5">

                    {/* row starts */}
                    <div class="row mb-4 text-left">

                        <div class="col-xl-1">
                            <img src="/assets/images/logo.png" class="mx-4" height="50px" width="70px" alt="logo"/>
                        </div>

                        <div class="col-xl-1 ms-5">
                        <NavLink to="/" className="text-decoration-none" > <a className="text-decoration-none" href="/#" >Home</a></NavLink>
                        </div>

                        <div class="col-xl-1">
                        <NavLink to="/pricing/" className="text-decoration-none">  <a href="/#" class="text-decoration-none">Pricing</a></NavLink>
                        </div>

                        <div class="col-xl-1">
                        <NavLink to="/contactus/" className="text-decoration-none">  <a href="/#" class="text-center text-decoration-none">Contact Us</a></NavLink>
                        </div>

                        <div class="col-xl-1">
                            <a href="/#" class="text-decoration-none">About Us</a>
                        </div>

                        <div class="col-xl-2">
                            <a href="/#" class="text-decoration-none">Terms & Conditions</a>
                        </div>

                        <div class="col-xl-2">
                            <a href="/#" class="text-decoration-none">Privacy Policy</a>
                        </div>

                        <div class="col-xl-2 d-flex justify-content-around text-center">

                            <i class="fa-brands fa-twitter fs-6 pt-1 me-5 footicon"></i>
                       
                            <i class="fa-brands fa-youtube fs-6 pt-1 me-5 footicon"></i>
                        
                            <i class="fa-brands fa-linkedin  fs-6 pt-1 footicon"></i>

                        </div>

                    </div>  
                    {/* <!-- row end --> */}

                </div> 
                 {/* <!-- end of upper part of footer -->  */}
              
                <hr style={ box }/>

                {/* <!-- lower part of footer --> */}
                <div class="pb-3">

                    {/* row starts */}
                    <div class="row mt-2">

                        <div class="d-flex justify-content-around">

                            <span class="material-icons-outlined fs-4 footicon">arrow_circle_up</span>
                        
                            <p><small class="text-muted">&#169; 2021 FelixTechLabs, Pune</small></p>
                        
                            <span class="material-icons fs-5 p-1 footicon">forum</span>

                        </div>

                    </div> 
                    {/* <!-- end of row --> */}

                </div>
                {/* <!-- end of lower part of footer --> */}

            </div>
            {/* <!-- footer ends --> */}

        </>
    );
}

export default Footer;



