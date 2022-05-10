import React from "react";
import { Link } from "react-router-dom";

const payment = () =>{
    return(
        <>
        {/* <!-- container-fluid starts --> */}
        <div class="container-fluid">

            {/* payment section starts */}
            <div class="mb-5 payment">

                <h2 class="mb-5 mt-4 pt-4 text-center">Payment</h2>

                {/* payment card starts */}
                <div class="card pb-5 mb-5 paymentcardmain">

                    {/* form starts */}
                    <form class="mx-5 mt-4">

                        {/* radio buttons part starts */}
                        <div>

                            {/* upi app radio button */}
                            <div class="mt-4 form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">UPI App</label>
                            </div>

                            {/* net banking radio button */}
                            <div class="mt-4 form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">Net Banking</label>
                            </div>

                            {/* debit/credit card radio button */}
                            <div class="mt-4 form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">Debit/Credit/ATM Card</label>                         
                            </div>

                        </div>
                        {/* radio buttons part ends */}

                        {/* sub form starts */}
                        <div>

                            {/* name on card */}
                            <div class="mt-5 paymentcardinput">
                                <label for="exampleInputName" class="form-label">Name on Card</label>
                                <input type="text" class="form-control" id="exampleInputName"/>                          
                            </div>

                            {/* card no */}
                            <div class="mt-4 paymentcardinput">
                                <label for="exampleInputNumber" class="form-label">Card no.</label>
                                <input type="number" class="form-control" id="exampleInputNumber"/>
                            </div>

                            {/* first row starts */}
                            <div class="row mt-4">

                                <div class="col-xl-5 col-md-12 col-sm-12">

                                    {/* validity */}
                                    <div class="paymentinput">
                                        <label for="exampleInputMonth" class="form-label">Validity</label>
                                        <input type="month" class="form-control" id="exampleInputMonth"/>
                                    </div>

                                </div>

                                <div class="col-xl-5 col-md-12 col-sm-12">

                                    {/* cvv */}
                                    <div class="mx-5 px-4 paymentinputcvv">
                                        <label for="exampleInputNo" class="form-label">CVV</label>
                                        <input type="number" class="form-control" id="exampleInputNo"/>
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
                        <div class="row">
                            <Link to="/pricing/checkout/payment/paysuccess/" class="btn mb-4 navbtn paymentcheckout">

                                <div class="col-xl-1"><i class="fa-solid fa-lock"></i></div>
                                <div class="col-xl-8">Secure Checkout</div>
                                <div class="col-xl-1"><i class="fa-solid fa-arrow-right"></i></div>

                            </Link>
                        </div>

                    </form>
                    {/* form ends */}

                </div>
                {/* payment card ends */}

            </div>
            {/* payment section ends */}

        </div>
        {/* <!-- container fluid ends --> */}
        </>
    );
}

export default payment;




