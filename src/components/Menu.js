import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {

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
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* navbar content starts */}
                        <div className="collapse navbar-collapse" id="navbarNav">

                            {/* ul starts */}
                            <ul className="navbar-nav mx-auto">

                            {/* home */}
                            <li class="nav-item me-5">
                                <a class="nav-link active" href="/#"><Link to="/" className="pe-5">Home</Link></a>
                            </li>
                        
                            {/* pricing */}
                            <li class="nav-item me-5">
                                <a class="nav-link" href="/#"><Link to="pricing/" className="pe-5">Pricing</Link></a>
                            </li>

                            {/* contact */}
                            <li class="nav-item me-5">
                                <a class="nav-link" href="/#"><Link to="contact/" className="pe-5">Contact Us</Link></a>
                            </li>

                            {/* login */}
                            <li class="nav-item me-5">
                                <a class="nav-link" href="/#"><Link to="login/" className="pe-5">Log In</Link></a>
                            </li>
                            
                            {/* register */}
                            <li class="nav-item">
                                <a href="/#" class="nav-link"><Link to="register/" className="btn text-center text-white rounded-pill px-4 pe-4 navbtn">Register</Link></a>
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



