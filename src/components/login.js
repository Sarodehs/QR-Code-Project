import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const login = () => {
    return(
        <>

            {/* <!-- container-fluid starts --> */}
            <div class="container-fluid">

                <Menu/>

                {/* <!-- login starts --> */}
                <div class="login">

                    {/* <!-- row starts --> */}
                    <div class="row mt-5 mx-5">

                        {/* <!-- left section in login page --> */}
                        <div class="col-lg-6">

                            <img src="../assets/images/log.png" alt="log" height="350px" width="70%" class="mb-5 pt-5 logimg"/><br/>
                            <h5>Modern. </h5>
                            <h5>Accessible. </h5>
                            <h5>Affordable. </h5>

                        </div>
                        {/* <!-- end of left section --> */}

                        <div class="col-lg-1"></div>

                        {/* <!-- form section in login page --> */}
                        <div class="col-lg-4 mt-5 mb-5">

                            <img src="../assets/images/menuscan.png" height="50px" class="mx-5 menuscanimg" alt="Menuscan"/>

                            <h4 class="pt-5">Login to your Account</h4>

                            {/* form starts */}
                            <form class="pt-4" autoComplete="off">

                                {/* email or number */}
                                <div class="input-group mb-2 input-group-sm">
                                    <input type="email/number" class="form-control" placeholder="Email/Mobile"/>
                                </div>
                                <br/>

                                {/* password */}
                                <div class="input-group mb-2 input-group-sm">
                                    <input type="password" class="form-control" placeholder="Password"/>
                                    <span class="input-group-text"><span class="material-icons-outlined">visibility_off</span></span>
                                </div>
                                
                                {/* forgot password */}
                                <a href="/#" class="d-flex justify-content-end">forgot password?</a><br/>

                                {/* sign in button */}
                                <button type="button" class="btn btn-sm px-5 pe-5 mt-4 mb-4 navbtn loginsigninbtn">SIGN IN</button>

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

                <Footer/>

            </div>
            {/* <!-- container fluid ends --> */}
    
        </>
    );
    
}

export default login;




