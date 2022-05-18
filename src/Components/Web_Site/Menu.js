import React from "react";
import { NavLink } from "react-router-dom";


const Menu = () =>  {

    return(
            <>

                {/* nav starts */}
                 <nav className="navbar navbar-expand-lg navbar-light bg-light routebar">

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
                            <NavLink to="/" className="pe-5 text-decoration-none">  <a class="nav-link text-dark" href="/#">Home</a></NavLink>
                            </li>
                        
                            {/* pricing */}
                            <li  class="nav-item me-5">
                            <NavLink to="/pricing/" className="pe-5 text-decoration-none">  <a class="nav-link text-dark" href="/#">Pricing</a></NavLink>
                            </li>

                            {/* contact */}
                            <li   class="nav-item me-5">
                            <NavLink to="/contactus/" className="pe-5 text-decoration-none"><a class="nav-link text-dark" href="/#">Contact Us</a></NavLink>
                            </li>

                            {/* login */}
                            <li   class="nav-item me-5">
                            <NavLink to="/login/" className="pe-5 text-decoration-none">   <a class="nav-link text-dark" href="/#">Log In</a></NavLink>
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

export default Menu;



