import React from "react";

const payment = () =>{
    return(
        <>
        {/* <!-- container-fluid starts --> */}
        <div class="container-fluid">

            {/* payment section starts */}
            <div class="mb-5 payment">

                <h2 class="mb-5 mt-4 pt-4 text-center">Payment</h2>

                {/* payment card starts */}
                <div class="card pb-5 mb-5 paymentcard">

                    {/* form starts */}
                    <form class="mx-5">

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
                            <div class="mt-5">
                                <label for="exampleInputName" class="form-label">Name on Card</label>
                                <input type="text" class="form-control" id="exampleInputName"/>                          
                            </div>

                            {/* card no */}
                            <div class="mt-4">
                                <label for="exampleInputNumber" class="form-label">Card no.</label>
                                <input type="number" class="form-control" id="exampleInputNumber"/>
                            </div>

                            {/* first row starts */}
                            <div class="row mt-4">

                                <div class="col-xl-5 col-md-10 col-sm-10">

                                    {/* validity */}
                                    <div>
                                        <label for="exampleInputMonth" class="form-label">Validity</label>
                                        <input type="month" class="form-control" id="exampleInputMonth"/>
                                    </div>

                                </div>

                                <div class="col-xl-1 col-md-2 col-sm-4"></div>

                                <div class="col-xl-4 col-md-8 col-sm-8">

                                    {/* cvv */}
                                    <div>
                                        <label for="exampleInputNo" class="form-label">CVV</label>
                                        <input type="number" class="form-control" id="exampleInputNo"/>
                                    </div>

                                </div>

                            </div>
                            {/* first row ends */}

                            {/* second row strats */}
                            <div class="row mt-5 mb-5">

                                <div class="col-xl-3 col-md-6 col-sm-12">

                                    {/* remember card checkbox */}
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">Remember Card</label>
                                    </div>

                                </div>

                                {/* mastercard */}
                                <div class="col-xl-1 col-md-2 col-sm-4">
                                    <img src="./Images/MasterCard.png" alt="mastercard"/>
                                </div>

                                {/* visa */}
                                <div class="col-xl-1 col-md-2 col-sm-4">
                                    <img src="./Images/visa.png" alt="visa"/>
                                </div>

                                {/* rupay */}
                                <div class="col-xl-1 col-md-2 col-sm-4 me-5">
                                    <img src="./Images/rupay.png" alt="rupay"/>
                                </div>

                                {/* ssl secured */}
                                <div class="col-xl-2  col-md-4 col-sm-8">
                                    <p>SSL SECURED</p>
                                </div>

                            </div>
                            {/* second row end */}

                        </div>
                        {/* sub form ends */}

                        <a href="/#" class="btn mb-5 mt-3 text-center navbtn paymentcheckout"><i class="fa-solid fa-lock me-5 mx-4"></i>Secure Checkout<i class="fa-solid fa-arrow-right mx-5 me-2"></i></a>

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




