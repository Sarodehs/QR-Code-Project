import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const contactus = () => {

    return (
        <>

            {/* <!-- container fluid starts --> */}
            <div className="container-fluid">

                <Menu/>

                {/* <!-- contact us starts --> */}
                <div className="mt-5 mb-5 ">
                     <div className="contact">
                    <h3 className="mt-3 text-center">Contact Us</h3>
                    <p className="mt-3 text-center mb-4">We will love to hear from you!</p>

                    {/* <!-- card starts --> */}
                    <div className="card mx-5  px -5 mb-5 w-80">

                        {/* <!-- row starts --> */}
                        <div className="row mx-3 mb-5 mt-5 ">

                            <div className="col-xl-1 col-md-2 col-sm-4"></div>

                            {/* <!-- our info --> */}
                            <div className="col-xl-4 col-md-8 col-sm-8 text-left info">

                                {/* location */}
                                <h6><span className="material-icons pe-2 mt-4">location_on</span>Head Office</h6>
                                <p className="px-4 pt-3 text-justify">3 Ideal Chambers, 2nd Floor, Ideal Colony ,Paud Road, kothrud, Pune, Maharashtra 411038</p>

                                {/* phone no */}
                                <h6 className="mt-5"><span className="material-icons pe-2">phone</span>Phone</h6>
                                <p className="px-4 pt-3">+91  898  123  5499</p>

                                {/* email */}
                                <h6 className="mt-5"><span className="material-icons pe-2">email</span>E-mail</h6>
                                <p className="px-4 pt-3">QR-help@Felix.com</p>

                            </div>
                            {/* <!-- end of our info --> */}

                            <div className="col-xl-1 col-md-2 col-sm-4"></div>

                            {/* <!-- contact us form --> */}
                            <div className="col-xl-5 col-md-8 col-sm-8">

                                {/* form starts */}
                                <form className="mt-3" autoComplete="off">

                                    {/* name */}
                                    <div>
                                        <label for="name" className="form-label">Name</label>
                                        <input type="text" className="form-control inputfocus" id="name" name="name" placeholder="Name" />
                                    </div><br />

                                    {/* phone number */}
                                    <div>
                                        <label for="phone" className="form-label">Phone Number</label>
                                        <input type="tel" className="form-control inputfocus" id="phone" name="phone" pattern="[0-9]{5}-[0-9]{5}" placeholder="+91 00000 00000" />
                                    </div><br />

                                    {/* subject */}
                                    <div>
                                        <label for="subject" className="form-label">Subject</label>
                                        <input type="text" className="form-control inputfocus" id="subject" name="subject" />
                                    </div><br />

                                    {/* msg for us */}
                                    <div className="mb-3 mt-3">
                                        <label for="msg">How can we help ?</label>
                                        <textarea className="form-control inputfocus" rows="4" id="msg" name="msg"></textarea>
                                    </div>

                                    {/* send button */}
                                    <button type="submit" className="btn btn-sm navbtn  text-center inputfocus px-5 pe-5 mt-3">Send</button>

                                </form>
                                {/* form ends */}

                            </div>
                            {/* <!-- end of contact us form --> */}

                        </div>
                        {/* <!-- row end --> */}

                    </div>
                    {/* <!-- card end --> */}
                    </div>

                     {/* <!-- map starts --> */}
                    <div className="text-center map">

                    {/* main row starts */}
                    <div className="row mx-5 px-5 text-center">

                        <div className="col-xl-11 col-md-11 col-sm-11" style={{background: "#FFE7D5" , height: '500px'}}>

                            <div className="row">

                                <div className="col-xl-12 col-md-12 col-sm-12">
                                <iframe className="mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.404215879449!2d73.81548731436864!3d18.510627074310598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbd8d5112df%3A0x40888f31c5f88b84!2sFelix%20IT%20Systems%20%7C%20UI%20UX%20Design%20Courses%20in%20Pune%20%7C%20Placements!5e0!3m2!1sen!2sin!4v1650367197153!5m2!1sen!2sin" width="80%" height="400px" allowfullscreen="400" loading="lazy" title="Location of Felix Its"></iframe>
                                </div>

                            </div>
                            {/* second row ends */}

                        </div>
                        {/* col in main row ends */}

                    </div>
                    {/* main row ends */}

                </div>
                {/* <!-- map ends --> */}

                </div>
                {/* <!-- contact us ends --> */}

               

                <Footer />

            </div>
            {/* <!-- container fluid ends--> */}

        </>
    );
}

export default contactus;



