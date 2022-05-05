

import React from "react";
import SettingNav from "../SettingNav";
const DownlodeQRCode = ({ children }) => {
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
                                        <div className="col-xl-6 col-md-6 col-sm-6 text-center">                                            
                                            <img src="/assets/images/qr-code.png" className="img-fluid rounded-start w-75 p-4" alt="img" />
                                            <div className="d-grid gap-2 col-xl-5 col-md-5 col-sm-4 mx-auto">
                                                <button className="btn buttonfocuscolor" type="button" >DOWNLODE QR CODE</button>
                                            </div>
                                        </div>
                                        <div className="col-xl- col-md-6 col-sm-6 p-4">
                                            <img src="/assets/images/qr-code2.png" className="img-fluid rounded-start w-75" alt="img" />
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
export default DownlodeQRCode;



