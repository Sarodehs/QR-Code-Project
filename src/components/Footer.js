import React from "react";

const box = {
    color: "white",
    width: '85%', 
    margin: '0% 0% 0% 7%'
}

const Footer = () => {
    return(
        <>
            {/* <!-- footer start --> */}
            <div class="footer mt-5 pt-5">

                {/* <!-- upper part of footer --> */}
                <div class="footermenu">

                    {/* row starts */}
                    <div class="row mb-4">

                        <div class="col-xl-1">
                            <img src="/assets/images/logo.png" class="mx-5" height="50px" width="70px" alt="logo"/>
                        </div>

                        <div class="col-xl-1">
                            <a href="/#" class="text-decoration-none">Home</a>
                        </div>

                        <div class="col-xl-1">
                            <a href="/#" class="text-decoration-none">Pricing</a>
                        </div>

                        <div class="col-xl-1">
                            <a href="/#" class="text-decoration-none">Contact Us</a>
                        </div>

                        <div class="col-xl-1">
                            <a href="/#" class="text-decoration-none">About Us</a>
                        </div>

                        <div class="col-xl-1">
                            <a href="/#" class="text-decoration-none">Terms & Conditions</a>
                        </div>

                        <div class="col-xl-1">
                            <a href="/#" class="text-decoration-none">Privacy Policy</a>
                        </div>

                        <div class="col-xl-2 footericon">

                            <i class="fa-brands fa-twitter me-5 footicon"></i>
                       
                            <i class="fa-brands fa-youtube me-5 footicon"></i>
                        
                            <i class="fa-brands fa-linkedin footicon"></i>

                        </div>

                    </div>  
                    {/* <!-- row end --> */}

                </div> 
                 {/* <!-- end of upper part of footer -->  */}
              
                <hr style={ box }/>

                {/* <!-- lower part of footer --> */}
                <div class="pb-3">

                    {/* row starts */}
                    <div class="row mt-2">

                        <div class="footend">

                            <span class="material-icons-outlined footicon">arrow_circle_up</span>
                        
                            <p><small class="text-muted">&#169; 2021 FelixTechLabs, Pune</small></p>
                        
                            <span class="material-icons p-1 footicon">forum</span>

                        </div>

                    </div> 
                    {/* <!-- end of row --> */}

                </div>
                {/* <!-- end of lower part of footer --> */}

            </div>
            {/* <!-- footer ends --> */}

        </>
    );
}

export default Footer;



