import React from "react";
import { Link } from "react-router-dom";

const register = () => { 
    
    return(
        <>
        {/* <!-- container-fluid starts --> */}
        <div class="container-fluid">

            {/* <!-- register start --> */}
            <div class="register">

                {/* main card */}
                <div class="card mb-5 mt-5 registercard">

                    {/* <!-- row start --> */}
                    <div class="row">

                        {/* <!-- left side of register --> */}
                        <div class="col-xl-4">

                            <div class="card registerleft">

                                <img src="/assets/images/logo.png" alt="logo" height="40px" width="80px" class="mt-5 registerlogo"/>
                                <p class="pt-5 text-center">Welcome to Contactless<br/>QR Menu Scanner</p>
                                <img src="/assets/images/registerimg.png"  alt="register" width="80%" class="registerscan"/>

                            </div>

                        </div>
                        {/* <!-- end of left side of register --> */}

                        <div class="col-xl-1 "></div>

                        {/* <!-- form section in register --> */}
                        <div class="col-xl-6  registerform">

                            <h4 class="mx-5 pt-4 mt-3 mb-3">Create Your Account</h4>

                            {/* form starts */}
                            <form autocomplete="off" class="mx-5">

                                {/* name */}
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="name" class="form-control" id="name" name="name" placeholder="Name"/>
                                </div>

                                {/* phone no */}
                                <div class="mb-3">
                                    <label for="no" class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control" id="no" name="no" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+91 000 000 0000"/>
                                </div>

                                {/* email */}
                                <div class="mb-3">
                                    <label for="email" class="form-label">E-mail ID</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="you@gmail.com"/>
                                </div>

                                {/* password */}
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" name="password"/>
                                </div>

                                {/* remember me checkbox */}
                                <div class="form-check mb-3">
                                    <label class="form-check-label">
                                    <input class="form-check-input me-1" type="checkbox" name="remember" style={{width: "15%"}}/> Remember me
                                    </label>
                                </div>

                                {/* register button */}
                                {/* <Link to="registernow/" class="btn btn-sm px-5 pe-5 mt-4 navbtn">Register Now</Link> */}
                                <Link to="./registernow/"><button class="btn btn-sm px-5 pe-5 mt-4 navbtn">Register Now</button></Link>
                            

                            </form>
                            {/* form ends */}

                            <p class="mx-5 pt-4"><small>Already have an account?<a href="/#">Sign In</a></small></p>
                            <hr class="mx-4" style={{width: "90%"}}/>
                            <p class="mx-5 mb-5"><small>By Clicking "Sign in" or "register Now" You agree to the <a href="/#">Terms</a>&<a href="/#">Privacy Policy</a></small></p>

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



