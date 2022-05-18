
import React from "react";
import { NavLink } from "react-router-dom";


const Homemenu = () => {
    return(
            <>

                {/* nav starts */}
                 <nav className="navbar navbar-expand-lg navbar-light bg-light routebar homemenu">

                    {/* container fluid starts */}
                    <div className="container-fluid">

                        {/* logo in navbar */}
                        <a className="navbar-brand" href="/#">
                            <img src="/assets/images/logo.png" class="mx-5" alt="logo" width="50px" height="30px"/>
                        </a>

                        {/* menu button in responsive */}
                        <button className="navbar-toggler inputfocus" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* navbar content starts */}
                        <div className="collapse navbar-collapse" id="navbarNav">

                            {/* ul starts */}
                            <ul className="navbar-nav mx-auto">

                            {/* home */}
                            <li  class="nav-item  me-5">
                            <NavLink to="/" className="pe-5 text-decoration-none">  <a class="nav-link text-white" href="/#">Home</a></NavLink>
                            </li>
                        
                            {/* pricing */}
                            <li  class="nav-item me-5">
                            <NavLink to="/pricing/" className="pe-5 text-decoration-none">  <a class="nav-link text-white" href="/#">Pricing</a></NavLink>
                            </li>

                            {/* contact */}
                            <li   class="nav-item me-5">
                            <NavLink to="/contactus/" className="pe-5 text-decoration-none"><a class="nav-link text-white" href="/#">Contact Us</a></NavLink>
                            </li>

                            {/* login */}
                            <li   class="nav-item ms-5 ps-5 me-5 homemenusignin">
                            <NavLink to="/login/" className="pe-5 text-decoration-none">   <a class="nav-link text-white" href="/#">Sign In</a></NavLink>
                            </li>
                            
                            {/* register */}
                            <li  class="nav-item" >
                            <NavLink to="/register/" className="btn btn-sm text-center inputfocus rounded-pill px-4 pe-4 navbtn"><a href="/#" class="nav-link text-white">Register</a></NavLink>
                            </li>                                                                           
                            
                            </ul>
                            {/* ul ends */}

                        </div>
                        {/* navbar content ends */}

                    </div>
                    {/* container fluid ends */}

                </nav>
                {/* nav ends */}

            </>
    );   
}

export default Homemenu;



