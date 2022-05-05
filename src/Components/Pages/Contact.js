import React from "react";


const Contact = () => {
    return (
        <>
            <div className="container-fluid displayflex ">
                <div className="row px-2">
                    {/* <!-- Content area start --> */}

                    <div className=" col-md-12 col-xl-12 col-sm-12 bg-light contantfixwh justify-content-center px-4 W-100">
                        <div className="row">
                            <div className="col-xl-5 col-md-5 justify-content-center align-items-center d-flex" >
                                <div className="card contactpadd" >
                                    <div className="card-body">
                                        <h3 className="card-title p-4">Contact Us</h3>
                                        <h6 className="card-subtitle mb-2 text-muted px-4">Please get in touch our & our export support team
                                            & our export support team answer your all </h6>
                                        <div className="p-4">
                                            <div className="row">
                                                <p className="card-text col-xl-2 col-md-2 d-flex"><span className="material-icons-outlined ">my_location</span>&nbsp;&nbsp;Area</p>
                                                <p className="card-text col-xl-10 col-md-10">- Pune</p>
                                            </div>
                                            <div className="row">
                                                <p className="card-text col-xl-2 col-md-2 d-flex"> <span className="material-icons-outlined">badge</span>&nbsp;&nbsp;Name </p>
                                                <p className="card-text col-xl-10 col-md-10">- Andrea Natalie Davidson</p>
                                            </div>
                                            <div className="row">
                                                <p className="card-text col-xl-2 col-md-2 d-flex"><span className="material-icons-outlined">call</span>&nbsp;&nbsp;Phone </p>
                                                <p className="card-text col-xl-10 col-md-10">- 022 8956231474</p>
                                            </div>
                                            <div className="row">
                                                <p className="card-text col-xl-2 col-md-2 d-flex"><span className="material-icons-outlined">mail</span>&nbsp;&nbsp;Email</p>
                                                <p className="card-text col-xl-10 col-md-10">- QR-Scanner@help.com</p>
                                            </div>
                                        </div>
                                        <div className="justify-content-center  align-items-center d-flex">
                                            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
                                            <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" />
                                            <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt="linkdin" />
                                            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png" alt="twitter" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-md-7  justify-content-center p-4 mt-4 align-items-center d-flex">
                                <form>
                                <h3 className="justify-content-center p-2 align-items-center d-flex">Write us your query</h3>
                                    <div className="row ">
                                        <div className="col-xl-6 col-md-12 mb-4 ">
                                            <input type="text" className="form-control contactinput" placeholder="Your Name" />
                                        </div>
                                        <div className="col-xl-6 col-md-12 mb-4">
                                            <input type="text" className="form-control contactinput" placeholder="Restaurant Name" />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-xl-6 col-md-12 mb-4">
                                            <input type="text" className="form-control contactinput" placeholder="Phone Number" />
                                        </div>
                                        <div className="col-xl-6 col-md-12 mb-4">
                                            <input type="text" className="form-control contactinput" placeholder="Restaurant ID" />
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-xl-12 col-md-12 mb-4">
                                            <input type="text" className="form-control contactinput" placeholder="Subject" />
                                        </div>

                                    </div>
                                    <div className="row ">
                                        <div className="col-xl-12 col-md-12 mb-4">

                                            <textarea className="form-control contactinput" id="exampleFormControlTextarea1" placeholder="Description" rows="10"></textarea>
                                        </div>

                                    </div>
                                    <div className="d-grid gap-2 col-xl-4 col-md-2 col-sm-2 mx-auto ">
                                        <button className="btn buttonfocuscolor" type="button" >SUBMIT</button>
                                    </div>

                                    <div className="d-grid p-4">
                                        <h5 className="text-center">We'll get back to you soon</h5>
                                        <p>This form is protected by  the Google Privacy Policy and Terms of Service apply</p>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                    {/* <!-- Content area start --> */}
                </div>
            </div>
        </>
    );
}


export default Contact;