import React from "react";



const Topnav = () => {
    return (

        <>
            <div className="container-fluid">
                <div >
                    {/* <!--top nav start --> */}
                    <nav className="navbar navbar-expand-md navbar-light w-100 topnavpadd">
                        <div className="navbar-nav  d-flex justify-content-center px-4">
                            <a className="navbar-brand" href="/#"> <img src="/assets/images/logo.png" className="img-fluid w-75" alt="logo" /></a>
                        </div>
                        <div className="text-end px-4" >
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav w-100 justify-content-around align-items-center">
                                <li className="nav-item dropdown ">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        City
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/#">pune</a></li>
                                        <li><a className="dropdown-item" href="/#">Munbai</a></li>
                                        <li><a className="dropdown-item" href="/#">Nashik</a></li>
                                        <li><a className="dropdown-item" href="/#">Kolhapur</a></li>
                                        <li><a className="dropdown-item" href="/#">Banglore</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown ">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Branch 1 Name
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/#">Action</a></li>
                                        <li><a className="dropdown-item" href="/#">Another action</a></li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/#">22-11-2021, Friday</a>
                                </li>
                            </ul>
                            <ul className="px-4 navbar-nav">
                                <li className="nav-item d-flex justify-content-center align-items-center ">
                                    <div className="position-relative ">
                                        <span className="material-icons-outlined ">notifications </span>
                                        <span class="position-absolute  start-100 translate-middle p-1 bg-warning  rounded-circle">
                                            <span class="visually-hidden">New alerts</span>
                                        </span>
                                    </div>
                                    <div className="px-4">
                                    <img src="/assets/images/profile.png" className="img-fluid px-4 topborder" alt="profile" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* <!--top nav end --> */}
                </div>
            </div>
        </>
    );
}


export default Topnav;