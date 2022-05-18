import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const payment = () =>{
    return(
        <>
        {/* <!-- container-fluid starts --> */}
        <div class="container-fluid">

        <nav class="navbar" style={{background:"white"}}>
  
            <a className="navbar-brand" href="/#">
                <img src="/assets/images/logo.png" class="mx-5" alt="logo" width="50px" height="30px"/>
            </a>

        </nav>

            {/* payment section starts */}
            <div class=" payment">

                <h2 class="mb-5 pt-4 text-center">Payment</h2>

                <div class="row">

                    <div className="col-xl-2"></div>

                    <div class="col-xl-8 mb-5 ">

                    {/* payment card starts */}
                    <div class="card w-100 paymentcardmain">

                        {/* form starts */}
                        <form class="mx-5 mt-4">

                            {/* radio buttons part starts */}
                            <div>

                                {/* upi app radio button */}
                                <div class="mt-4 form-check">
                                    <input class="form-check-input inputfocus " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">UPI App</label>
                                </div>

                                {/* net banking radio button */}
                                <div class="mt-4 form-check">
                                    <input class="form-check-input inputfocus " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">Net Banking</label>
                                </div>

                                {/* debit/credit card radio button */}
                                <div class="mt-4 form-check">
                                    <input class="form-check-input inputfocus " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">Debit/Credit/ATM Card</label>                         
                                </div>

                            </div>
                            {/* radio buttons part ends */}

                            {/* sub form starts */}
                            <div>

                                {/* name on card */}
                                <div class="mt-5">
                                    <label for="exampleInputName" class="form-label">Name on Card</label>
                                    <input type="text" class="form-control inputfocus " id="exampleInputName"/>                          
                                </div>

                                {/* card no */}
                                <div class="mt-4">
                                    <label for="exampleInputNumber" class="form-label">Card no.</label>
                                    <input type="number" class="form-control inputfocus " id="exampleInputNumber"/>
                                </div>

                                {/* first row starts */}
                                <div class="row mt-4">

                                    <div class="col-xl-5 col-md-12 col-sm-12">

                                        {/* validity */}
                                        <div>
                                            <label for="exampleInputMonth" class="form-label">Validity</label>
                                            <input type="month" class="form-control inputfocus " id="exampleInputMonth"/>
                                        </div>

                                    </div>

                                    <div className="col-xl-2"></div>
                                    
                                    <div class="col-xl-5 col-md-12 col-sm-12">

                                        {/* cvv */}
                                        <div>
                                            <label for="exampleInputNo" class="form-label">CVV</label>
                                            <input type="number" class="form-control inputfocus " id="exampleInputNo"/>
                                        </div>

                                    </div>

                                </div>
                                {/* first row ends */}

                                {/* second row starts */}
                                <div class="row mt-5 mb-5">

                                    <div class="col-xl-3 col-md-6 col-sm-12">

                                        {/* remember card checkbox */}
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">Remember Card</label>
                                        </div>

                                    </div>

                                    {/* mastercard */}
                                    <div class="col-xl-1 col-md-2 col-sm-4 mb-3">
                                        <img src="/assets/images/MasterCard.png" alt="mastercard"/>
                                    </div>

                                    {/* visa */}
                                    <div class="col-xl-1 col-md-2 col-sm-4 mb-3">
                                        <img src="/assets/images/visa.png" alt="visa"/>
                                    </div>

                                    {/* rupay */}
                                    <div class="col-xl-1 col-md-2 col-sm-4 me-5 mb-3">
                                        <img src="/assets/images/rupay.png" alt="rupay"/>
                                    </div>

                                    {/* ssl secured */}
                                    <div class="col-xl-2  col-md-4 col-sm-8">
                                        <p>SSL SECURED</p>
                                    </div>

                                </div>
                                {/* second row end */}

                            </div>
                            {/* sub form ends */}

                            {/* secure checkout button */}
                            <div class="row mb-5">
                                <NavLink to="/paysuccess/" className="text-decoration-none"> 
                                
                                    <div class="btn mb-5 inputfocus navbtn w-75 mx-5 d-flex justify-content-around">

                                        <div class="col-xl-1"><i class="fa-solid fa-lock"></i></div>
                                        <div class="col-xl-8">Secure Checkout</div>
                                        <div class="col-xl-1"><i class="fa-solid fa-arrow-right"></i></div> 

                                    </div>

                                </NavLink>
                            </div>

                        </form>
                        {/* form ends */}

                    </div>
                    {/* payment card ends */}

                    </div>
                    {/* col ends */}

                </div>
                {/* row ends */}

            </div>
            {/* payment section ends */}

            <Footer/>

        </div>
        {/* <!-- container fluid ends --> */}

        </>
    );
}

export default payment;




