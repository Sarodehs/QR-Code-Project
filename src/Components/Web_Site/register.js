import React from "react";
import { NavLink } from "react-router-dom";

const register = () => { 
    
    return(
        <>
        {/* <!-- container-fluid starts --> */}
        <div class="container-fluid">

            {/* <!-- register start --> */}
            <div class="register mx-5 px-5">

                {/* main card */}
                <div class="card m-5 w-90 rounded-3  registercard">

                    {/* <!-- row start --> */}
                    <div class="row">

                        {/* <!-- left side of register --> */}
                        <div class="col-xl-4">

                            <div class="card rounded-3 w-100 h-100 text-center registerleft">

                                <img src="../assets/images/logo.png" alt="logo" height="40px" width="80px" className="mt-5 mb-5 registerlogo"/>
                                <div className="d-flex justify-content-center mt-5 mb-5 ">
                                <h5 class="text-center">Welcome to Contactless<br/>QR Menu Scanner</h5>
                                </div>
                                <img src="../assets/images/registerimg.png"  alt="register" width="80%" class="mt-5 pt-5 mx-5 px-4 registerscan"/>

                            </div>

                        </div>
                        {/* <!-- end of left side of register --> */}

                        <div class="col-xl-2"></div>

                        {/* <!-- form section in register --> */}
                        <div class="col-xl-5 registerform">

                            <h4 className="mt-5 text-center mb-5">Create Your Account</h4>

                            {/* form starts */}
                            <form autocomplete="off" class="mx-3">

                                {/* name */}
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="name" class="form-control inputfocus" id="name" name="name" placeholder="Name"/>
                                </div>

                                {/* phone no */}
                                <div class="mb-3">
                                    <label for="no" class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control inputfocus" id="no" name="no" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+91 000 000 0000"/>
                                </div>

                                {/* email */}
                                <div class="mb-3">
                                    <label for="email" class="form-label">E-mail ID</label>
                                    <input type="email" class="form-control inputfocus" id="email" name="email" placeholder="you@gmail.com"/>
                                </div>

                                {/* password */}
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control inputfocus" id="password" name="password"/>
                                </div>

                                {/* remember me checkbox */}
                                <div class="form-check mb-3">
                                    <label class="form-check-label">
                                    <input class="form-check-input me-1 inputfocus" type="checkbox" name="remember" style={{width: "15%"}}/> Remember me
                                    </label>
                                </div>

                                {/* register button */}
                                
                                <NavLink to="/registernow/"><button class="btn btn-sm pe-5 px-5 mt-4 w-100 inputfocus navbtn">Register Now</button></NavLink>
                            

                            </form>
                            {/* form ends */}

                           <p class="mx-5 pt-4"><small>Already have an account ?  <NavLink to="/login/"><a href="/#">Sign In</a></NavLink></small></p>
                            <hr class="mx-4" style={{width: "90%"}}/>
                            <p class="mx-5 mb-5"><small>By Clicking "Sign in" or "register Now" You agree to the <a href="/#">Terms</a> & <a href="/#">Privacy Policy</a></small></p>

                        </div>
                        {/* <!-- end of form section --> */}

                    </div>
                    {/* <!-- end of row --> */}

                </div>
                {/* <!-- main card end --> */}

            </div>
            {/* <!-- register end --> */}

        </div>
        {/* <!-- container fluid ends --> */}
        

        </>
    );
    
}

export default register;



