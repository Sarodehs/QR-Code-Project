import Sidenav from "../Navbar/Sidenav";
import { NavLink} from 'react-router-dom'
import React from "react";
import SettingNav from "../Navbar/SettingNav";
import Topnav from "../Navbar/Topnav";
import Footer from "../Navbar/Footer"; 

const GenerateQRCode = ({ children }) => {
    return (
        <>
            <div className="container-fluid  ">
            <Topnav/>
                <div className="row ">
                    {/* <!-- side nav start --> */}
                    <div className=" col-md-2 col-xl-2 col-sm-2 " >
                        <Sidenav />
                    </div>
                    {/* <!-- side nav end --> */}
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-10 col-xl-10 col-sm-10 bg-light   justify-content-center " >
                        
                            <div className="row ">
                                <div className="col-xl-2 col-md-2 col-sm-2">
                                    <SettingNav />
                                </div>
                                <div className="col-xl-10 col-md-10 col-sm-10 p-4">
                                    <div className="row">
                                        <div className="col-xl-6 col-md-12 col-sm-12 text-center">                                            
                                            <img src="/assets/images/qr-code.png" className="img-fluid rounded-start w-75 p-4" alt="img" />
                                            <div className="d-grid gap-2 col-xl-5 col-md-4 col-sm-2 mx-auto p-2">
                                            <NavLink to="DownlodeQRCode/"  style={{ textDecoration: 'none' }}>
                                                <button className="btn btn-warning buttonfocuscolor" type="button" >GENERATE QR CODE</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-12 col-sm-12 p-4">
                                            <img src="/assets/images/qr-code1.png" className="img-fluid rounded-start w-75" alt="img" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
                <main>{children}</main>
                <Footer />
            </div>


        </>
    );
}
export default GenerateQRCode;



