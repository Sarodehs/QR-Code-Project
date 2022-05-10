import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
// import monthly from "../monthly";

const pricing = () => {
  
    return(
        <>

        {/* <!-- container-fluid starts --> */}
        <div class="container-fluid">

            <Menu/>

            {/* <!-- pricing text starts --> */}
            <div class="text-center mt-5 pricing">
                <h2>Pricing Plans</h2>
                <p>for your every stage of growth</p>

                {/* <Link to="monthly/"> */}
                    <button class="btn btn-sm ps-4 pe-4 silbtn">Monthly</button>
                    {/* </Link> */}
                {/* <Link to="/"> */}
                    <button class="btn btn-sm ps-4 pe-4 text-center navbtn">Yearly</button>
                    {/* </Link> */}

                {/* <!-- yearly button starts --> */}
                <div class="yearly">

                    {/* <!-- row starts --> */}
                    <div class="row mt-5 d-flex justify-content-center">

                        {/* <!-- free plan starts --> */}
                        <div class="col-xl-3 col-md-6 col-sm-12 mt-5 mb-5 text-center">

                            {/* <!-- free plan card start --> */}
                            <div class="card pb-5 freecard">

                                {/* <!-- head part in free plan card --> */}
                                <div class="card-header text-center mt-3">

                                    <h6 style={{color: "#B5876D"}}>Free plan</h6>
                                    <h3>Free</h3>
                                    <p><small class="text-muted">For First Month</small></p>

                                </div>
                                
                                {/* <!-- list part in free plan card --> */}
                                <ul class="list-group">

                                    <li class="list-group-item"><i class="fa fa-check pe-3" aria-hidden="true"></i>Easy Upload of your menu in the system<br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Digital menu on the table of your restaurant<br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Online menu editing in the webpage<br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Easy upload of images on the system<br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Unlimited adding of menu items<br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Custom QR codes(10 QR codes)<br/><br/>
                                    <button type="button" class="btn btn-sm px-5 pe-5 silbtn">Chooose</button>
                                    </li>
                                
                                </ul>                            

                            </div>
                            {/* <!-- free plan card end --> */}

                        </div>
                        {/* <!-- free plan ends --> */}

                        {/* <!-- gold plan starts --> */}
                        <div class="col-xl-3 col-md-6 col-sm-12 mx-4 text-center">

                            {/* <!-- gold plan card start --> */}
                            <div class="card pb-5 goldcard">

                                {/* <!-- head part in gold plan card --> */}
                                <div class="card-header text-center mt-3">

                                    <h6 class="mx-5" style={{color: "#B5876D"}}>Gold Plan  </h6>
                                        <button class="btn btn-sm px-4 pe-4 popularbtn rounded-pill"><small>Popular</small></button>
                                    {/* </h6> */}
                                    <h3><span class="material-icons-outlined">currency_rupee</span>05<span>K</span></h3>
                                    <p><small class="text-muted">Per member Per Month</small></p>

                                </div>
                                
                                {/* <!-- list part in gold plan card --> */}
                                <ul class="list-group">

                                    <li class="list-group-item"><i class="fa-solid fa-circle pe-3"></i><b>Everything in a Silver plan</b><br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Custom QR code(Unlimited QR codes)<br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Creation of special offers and discounts<br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Contactless payments<br/><br/><br/>
                                    <button type="button" class="btn px-5 pe-5 navbtn btn-sm goldchoosebutton">Chooose</button>
                                    </li>

                                </ul>
                                
                            </div>
                             {/* <!-- gold plan card end --> */}

                        </div>
                        {/* <!-- gold plan ends --> */}

                        {/* <!-- silver plan starts --> */}
                        <div class="col-xl-3  col-md-6 col-sm-12 mt-5 mx-4 text-center">

                            {/* <!-- silver plan card start --> */}
                            <div class="card pb-5 silvercard">

                                {/* <!-- head part in silver plan card --> */}
                                <div class="card-header text-center mt-3">

                                    <h6 style={{color: "#B5876D"}}>Silver plan</h6>
                                    <h3><span class="material-icons-outlined">currency_rupee</span>04<span>K</span></h3>
                                    <p><small class="text-muted">Per member Per Month</small></p>

                                </div>
                                
                                {/* <!-- list part in silver plan card --> */}
                                <ul class="list-group">

                                    <li class="list-group-item"><i class="fa-solid fa-circle pe-3"></i><b>Everything in a Free plan</b><br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Custom QR code(25 QR codes)<br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>Choose your own theme<br/>
                                    <i class="fa fa-check pe-3" aria-hidden="true"></i>24*7 customer support<br/><br/><br/>
                                    <Link to="/pricing/checkout/" style={{ textDecoration: 'none' }}><button type="button" class="btn btn-sm px-5 pe-5 silbtn" >Chooose</button></Link>
                                    </li> 
                                
                                </ul>
                                
                            </div>
                             {/* <!-- silver plan card end --> */}

                        </div>
                        {/* <!-- silver plan ends --> */}

                    </div>
                    {/* <!-- row ends --> */}

                </div>
                {/* <!-- yearly button ends --> */}
                
            </div>
            {/* <!-- pricing text ends --> */}

            {/* <!-- customer says --> */}
            <div class="cust mt-5 mb-5">

                <h3 class="px-5 mx-5">What our Customers say?</h3>

                {/* customer part starts */}
                <div class="text-center mt-5 mb-4 customer">

                    {/* <div className="d-flex justify-content-around">
                    <span class="material-icons picons pt-5 mt-3">arrow_circle_left</span> 
                    <img src="../assets/images/p1.png" height="10%" width="10%" class=" mt-5" alt="first person"/>
                    <img src="../assets/images/p2.png" height="15%" width="15%" class="" alt="second person"/>   
                    <img src="../assets/images/p3.png" height="10%" width="10%" class=" mt-5" alt="third person"/>
                    <span class="material-icons picons  pt-5 mt-3">arrow_circle_right</span>
                    </div> */}

                    {/* row starts */}
                    <div class="row d-flex justify-content-center">

                        <div class="col-xl-2"></div>

                        <div class="col-xl-1 col-md-2 col-sm-4 mt-5 pt-4">
                            <span class="material-icons picons">arrow_circle_left</span>  
                        </div>
                        
                        <div class="col-xl-1 col-md-2 col-sm-4 mt-5">
                            <img src="../assets/images/p1.png" width="90%" class="" alt="first person"/>
                        </div>

                        <div class="col-xl-2 col-md-4 col-sm-8 mb-4">
                            <img src="../assets/images/p2.png"  width="80%" class="" alt="second person"/>   
                        </div>

                        <div class="col-xl-1 col-md-2 col-sm-4 mt-5">
                            <img src="../assets/images/p3.png" width="90%" class="" alt="third person"/>
                        </div>

                        <div class="col-xl-1  col-md-2 col-sm-4 mt-5 pt-4">
                            <span class="material-icons picons px-5">arrow_circle_right</span>
                        </div>
                        
                        <div class="col-xl-2  col-md-4 col-sm-8"></div>

                    </div>
                    {/* row ends */}

                </div>    
                {/* customer part ends */}

                {/* review by customer */}
                <div class="customerreview">
                    <div class="card mx-auto mt-5 mb-5" style={{width:"45%"}}>
                        <div class="card-text mt-4 mx-3"><b>QR Scanner is a intuitive & affordable options our match perfectly. I am now so happy to us this system It saves time</b></div>
                        <div class="card-body mt-3 mx-0"><b>Mr. Sonal Rathi</b></div>
                        <div class="card-subtitle mb-4 mx-3"><small class="text-muted">Natural chain of hotels, Banglore</small></div>
                    </div>
                </div>

            </div>
            {/* <!-- end of customer says --> */}

            {/* <!-- faq starts--> */}
            <div class="faq mx-5">                

            <h3 class="mb-5 px-5">Frequently Asked Questions</h3>

                {/* accordion starts */}
                <div class="accordion accordion-flush"  id="accordionFlushExample">

                    {/* first faq */}
                    <div class="accordion-item mb-4 mt-4 mx-5">

                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                How can I connect online payments?
                            </button>
                        </h2>

                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Once you signed up and if you desire to connect online payments provide us with your UPI  and we will integrate with your account instantly.</div>
                        </div>

                    </div>

                    {/* second faq */}
                    <div class="accordion-item mb-4 mx-5">

                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Should I pay for customer support?
                            </button>
                        </h2>

                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">No, Customer support service will be free of cost and will be provided by us.</div>
                        </div>

                    </div>

                    {/* third faq */}
                    <div class="accordion-item mb-4 mx-5">

                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                How I will create my menu?
                            </button>
                        </h2>

                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Menu creation can be done by the person who buys our packs and if you want to create your menu for free it will be done but only for 10 days.</div>
                        </div>

                    </div>

                    {/* fourth faq */}
                    <div class="accordion-item mb-4 mx-5">

                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Does trial includes all features?
                            </button>
                        </h2>

                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">No, trial includes only some of the basic features and if you wish to use all our features you can buy our packs i.e gold or silver pack.</div>
                        </div>

                    </div>

                    {/* fifth faq */}
                    <div class="accordion-item mb-4 mx-5">

                        <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Is cloud data hosting free?
                            </button>
                        </h2>
                        
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">No, charges are to be paid after free usage of 1 month.</div>
                        </div>

                    </div>

                </div>
                {/* accordion ends */}

            </div>
            {/* <!-- faq ends --> */}            

            <Footer />

        </div>  
        {/* <!-- container-fluid ends --> */}

        </>
    );
    
}

export default pricing;





