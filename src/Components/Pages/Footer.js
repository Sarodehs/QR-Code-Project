import React from "react";


const Footer = () => {
    return (
        <>


            {/* <!-- footer start --> */}
                <footer className="footer footerbar-expand-lg footerbar-light d-flex footerback ">
                    <div className="container-fluid">
                        <div className="row p-4 w-100">
                            {/* <!-- <a href="" className=""> --> */}
                            <div className="col-xl-1 col-md-2 col-sm-2 justify-content-end d-flex">
                                <span className="material-icons-outlined logouticon ">logout</span>
                            </div>
                            <div className="col-xl-1 col-md-2 col-sm-2 justify-content-start d-flex align-items-start">
                                <p>Logout</p>
                            </div>
                            {/* <!-- </a> --> */}
                            <div className="col-xl-10 col-md-8 col-sm-8 justify-content-end d-flex align-items-end ">
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