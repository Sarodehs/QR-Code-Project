import React from "react";

const contact = () => {

    return (
        <>

            {/* <!-- container fluid starts --> */}
            <div class="container-fluid">

                {/* <!-- contact us starts --> */}
                <div class="mt-5 mb-5 contact">

                    <h3 class="mt-3 text-center">Contact Us</h3>
                    <p class="mt-3 text-center mb-4">We will love to hear from you!</p>

                    {/* <!-- card starts --> */}
                    <div class="card">

                        {/* <!-- row starts --> */}
                        <div class="row mb-5">

                            <div class="col-xl-1 col-md-2 col-sm-4"></div>

                            {/* <!-- our info --> */}
                            <div class="col-xl-4 col-md-8 col-sm-8 text-left info">

                                {/* location */}
                                <h6><span class="material-icons pe-2 mt-4">location_on</span>Head Office</h6>
                                <p class="px-5 pt-3">3 Ideal Chambers, 2nd Floor, Ideal Colony ,Paud Road, kothrud, Pune, Maharashtra 411038</p>

                                {/* phone no */}
                                <h6><span class="material-icons pe-2">phone</span>Phone</h6>
                                <p class="px-5 pt-3">+91  898  123  5499</p>

                                {/* email */}
                                <h6><span class="material-icons pe-2">email</span>E-mail</h6>
                                <p class="px-5 pt-3">QR-help@Felix.com</p>

                            </div>
                            {/* <!-- end of our info --> */}

                            <div class="col-xl-1 col-md-2 col-sm-4"></div>

                            {/* <!-- contact us form --> */}
                            <div class="col-xl-4 col-md-8 col-sm-8">

                                {/* form starts */}
                                <form autoComplete="off">

                                    {/* name */}
                                    <div>
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Name" />
                                    </div><br />

                                    {/* phone number */}
                                    <div>
                                        <label for="phone" class="form-label">Phone Number</label>
                                        <input type="tel" class="form-control" id="phone" name="phone" pattern="[0-9]{5}-[0-9]{5}" placeholder="+91 00000 00000" />
                                    </div><br />

                                    {/* subject */}
                                    <div>
                                        <label for="subject" class="form-label">Subject</label>
                                        <input type="text" class="form-control" id="subject" name="subject" />
                                    </div><br />

                                    {/* msg for us */}
                                    <div class="mb-3 mt-3">
                                        <label for="msg">How can we help ?</label>
                                        <textarea class="form-control" rows="4" id="msg" name="msg" style={{ width: '90%' }}></textarea>
                                    </div>

                                    {/* send button */}
                                    <button type="submit" class="btn btn-sm navbtn px-5 pe-5 mt-3">Send</button>

                                </form>
                                {/* form ends */}

                            </div>
                            {/* <!-- end of contact us form --> */}

                        </div>
                        {/* <!-- row end --> */}

                    </div>
                    {/* <!-- card end --> */}

                </div>
                {/* <!-- contact us ends --> */}

                {/* <!-- map starts --> */}
                <div class="text-center pt-5 map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.404215879449!2d73.81548731436864!3d18.510627074310598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbd8d5112df%3A0x40888f31c5f88b84!2sFelix%20IT%20Systems%20%7C%20UI%20UX%20Design%20Courses%20in%20Pune%20%7C%20Placements!5e0!3m2!1sen!2sin!4v1650367197153!5m2!1sen!2sin" width="60%" height="400" allowfullscreen="" loading="lazy" title="Location of Felix Its"></iframe>
                </div>
                {/* <!-- map ends --> */}

            </div>
            {/* <!-- container fluid ends--> */}

        </>
    );
}

export default contact;



