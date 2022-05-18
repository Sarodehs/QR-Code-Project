import React from "react";
import { NavLink } from 'react-router-dom' 

const login = () => {
    const isAdmin=false;
    return(
        <>

            {/* <!-- container-fluid starts --> */}
            <div class="container-fluid mt-5 pt-5">

               

                {/* <!-- login starts --> */}
                <div class="login">

                    {/* <!-- row starts --> */}
                    <div class="row mx-5">

                        {/* <!-- left section in login page --> */}
                        <div class="col-lg-6 mt-5">

                            <img src="../assets/images/log.png" alt="log" height="70%" width="90%" class="mx-5 logimg"/><br/>
                            
                            <div class="row text-center mt-5">
                                
                                <div className="col-xl-4"> <h5><b>Modern. </b></h5></div>
                                <div className="col-xl-4">  <h5><b>Accessible. </b></h5></div>
                                <div className="col-xl-4"> <h5><b>Affordable. </b></h5></div>
                           
                            </div>

                        </div>
                        {/* <!-- end of left section --> */}

                        <div class="col-lg-2"></div>

                        {/* <!-- form section in login page --> */}
                        <div class="col-lg-3 mt-5 mb-5">

                            <img src="../assets/images/menuscan.png" height="50px" class="mx-5 mt-5" alt="Menuscan"/>

                            <h4 class="pt-5">Login to your Account</h4>

                            {/* form starts */}
                            <form class="pt-4 w-100" autoComplete="off">

                                {/* email or number */}
                                <div class="input-group mb-2 input-group-sm">
                                    <input type="email/number" class="form-control inputfocus" placeholder="Email/Mobile"/>
                                </div>
                                <br/>

                                {/* password */}
                                <div class="input-group mb-2 input-group-sm">
                                    <input type="password" class="form-control inputfocus" placeholder="Password"/>
                                    <span class="input-group-text"><span class="material-icons-outlined">visibility_off</span></span>
                                </div>
                                
                                {/* forgot password */}
                                <a href="/#" class="d-flex justify-content-end">forgot password?</a><br/>

                                {/* sign in button */}
                                {isAdmin ? 
                                <NavLink to="/Signup/">  <button type="button" class="btn btn-sm px-5 pe-5 mt-4 mb-4 navbtn inputfocus w-100">SIGN IN </button></NavLink>
                                : 
                                <NavLink to="/admin-dashboard/">  <button type="button" class="btn btn-sm px-5 pe-5 mt-4 mb-4 navbtn inputfocus w-100">SIGN IN </button></NavLink>
                                }
                                {/* send request to create account */}
                                <p> Don't have an account? <a href="/#">Send Request</a></p>

                            </form>
                            {/* form ends */}

                        </div>
                        {/* <!-- end of form section in login page --> */}

                    </div>
                    {/* <!-- end of row --> */}

                </div>
                {/* <!-- login ends --> */}

                

            </div>
            {/* <!-- container fluid ends --> */}
    
        </>
    );
    
}

export default login;




