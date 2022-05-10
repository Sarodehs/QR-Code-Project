import React from "react";
const registernow = () =>{
    return(
        <>
        {/* <!-- container-fluid starts --> */}
        <div class="container-fluid">

            {/* <!-- registernow start --> */}
            <div class="registernow">

                {/* main card */}
                <div class="card mb-5 mt-5 registercard">

                    {/* <!-- main row start --> */}
                    <div class="row">

                        {/* <!-- left side of registernow --> */}
                        <div class="col-xl-4">

                            <div class="card registerleft">

                                <img src="/assets/images/logo.png" alt="logo" height="40px" width="80px" className="mt-5 mb-5 registerlogo"/>
                                <div className="d-flex justify-content-center mt-5 mb-5 ">
                                <h5 class="text-center">Welcome to Contactless<br/>QR Menu Scanner</h5>
                                </div>
                                <img src="/assets/images/registerimg.png"  alt="register" width="80%" class="mx-5 px-4 registerscan"/>
                            
                            </div>

                        </div>
                        {/* <!-- end of left side of registernow --> */}

                        <div class="col-xl-1 "></div>

                        {/* <!-- connect section in registernow --> */}
                        <div class="col-xl-6 mt-5 text-center connectpart">

                            <h5 class="text-center">Your Request is Registered</h5>

                            <p class="pt-3 text-center">Our team contact you soon</p>

                            {/* first row start */}
                            <div class="row mt-5 pt-5 connectlocation">

                                <h5 class="mt-5 text-center">You will Connect with Us on</h5>

                                {/* col for phone starts */}
                                <div class="col-md-5 mt-4">

                                    {/* card for phone starts */}
                                    <div class="card mt-3">

                                        <h6 class="px-4 text-start">Phone</h6>
                                        <p><span class="material-icons pe-2">phone</span> +91 898 123 5498</p>
                                    
                                    </div>
                                    {/* card for phone ends */}

                                </div>
                                {/* col for phone ends */}

                                {/* col for email starts */}
                                <div class="col-md-5 mt-4">

                                    {/* card for email starts */}
                                    <div class="card mt-3">

                                        <h6 class="px-4 text-start">E-mail</h6>
                                        <p><span class="material-icons pe-2">email</span>QR-help@Felix.com</p>
                                    
                                    </div>
                                    {/* card for email ends */}

                                </div>
                                {/* col for email ends */}

                            </div>
                            {/* first row ends */}

                            {/* second row starts */}
                            <div class="row mt-4">

                                {/* col for head office starts */}
                                <div class="col-md-6 mt-3">

                                    {/* head office card start */}
                                    <div class="card mt-2">

                                        <h6 class="px-4 text-start">Head Office</h6>
                                        <div class="headoffice mx-4">
                                            <span class="material-icons pe-2">location_on</span><blockquote class="text-start">3 Ideal Chambers, 2nd Floor, Ideal Colony ,Paud Road, kothrud, Pune, Maharashtra 411038</blockquote>
                                        </div>
                                    </div>
                                    {/* head office card ends */}

                                </div>
                                {/* col for head office ends */}

                            </div>
                            {/* second row ends */}

                        </div>
                        {/* <!-- end of connect section in registernow --> */}

                    </div>
                    {/* <!-- end of main row --> */}

                </div>
                {/* <!-- main card end --> */}

            </div>
            {/* <!-- registernow end --> */}

        </div>
        {/* <!-- container fluid ends --> */}
        
        </>
    );
}

export default registernow;



