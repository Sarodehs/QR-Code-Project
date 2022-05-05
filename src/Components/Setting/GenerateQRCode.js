
import { NavLink} from 'react-router-dom'
import React from "react";
import SettingNav from "../SettingNav";


const GenerateQRCode = ({ children }) => {
    return (
        <>
            <div className="container-fluid displayflex ">
                <div className="row px-2">
                    {/* <!-- Content area start --> */}
                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh  justify-content-center " >
                        <div className=" displayflex ">
                            <div className="row ">
                                <div className="col-xl-2 col-md-4 col-sm-8">
                                    <SettingNav />
                                </div>
                                <div className="col-xl-10 col-md-12 col-sm-12 p-4">
                                    <div className="row">
                                        <div className="col-xl-6 col-md-12 col-sm-12 text-center">                                            
                                            <img src="/assets/images/qr-code.png" className="img-fluid rounded-start w-75 p-4" alt="img" />
                                            <div className="d-grid gap-2 col-xl-4 col-md-4 col-sm-2 mx-auto p-2">
                                            <NavLink to="DownlodeQRCode/"  style={{ textDecoration: 'none' }}>
                                                <button className="btn buttonfocuscolor" type="button" >GENERATE QR CODE</button>
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
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
                <main>{children}</main>
            </div>


        </>
    );
}
export default GenerateQRCode;



