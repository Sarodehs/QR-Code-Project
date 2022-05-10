import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* <!-- footer start --> */}
            <footer className="footer footerbar-expand-lg footerbar-light d-flex footerback ">
                <div className="container-fluid">
                    <div className="row p-4 w-100">
                        <div className=" col-xl-4 col-md-4 text-start">
                            <NavLink to="/Relogin/" style={{ textDecoration: 'none' }}>

                                <button className="btn" type="button" >
                                    <span className="material-icons-outlined logouticon ">logout</span>&nbsp; Logout </button>
                            </NavLink>
                        </div>

                        <div className=" col-xl-8 col-md-8 text-end">
                            <p>QR MENU SCANNER - Designed By Felix TechLabs</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!-- footer end --> */}

        </>
    );
}


export default Footer;