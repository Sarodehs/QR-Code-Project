const monthly = () =>{
    return(
        <>

        {/* container fluid starts */}
        <div class="container-fluid">

            {/* <!-- monthly button starts --> */}
            <div class="monthly">

                {/* <!-- row starts --> */}
                <div class="row mt-5">

                    {/* <div class="col-md-1"></div> */}

                    {/* <!-- free plan starts --> */}
                    <div class="col-md-3 mt-5 offset-1">

                        {/* <!-- free plan card start --> */}
                        <div class="card pb-5" style={{width: "18rem"}}>

                            {/* <!-- head part in free plan card --> */}
                            <div class="card-header text-center mt-3">

                                <h6 style={{color: "#FF7000"}}>Free plan</h6>
                                <h3>Free</h3>
                                <p><small class="text-muted">For First Month</small></p>

                            </div>
                            
                            {/* <!-- list part in free plan card --> */}
                            <ul class="list-group">

                                <li class="list-group-item"><i class="fa fa-check" aria-hidden="true"></i>Easy Upload of your menu in the system<br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Digital menu on the table of your restaurant<br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Online menu editing in the webpage<br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Easy upload of images on the system<br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Unlimited adding of menu items<br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Custom QR codes(10 QR codes)<br/><br/>
                                <button type="button" class="btn px-5 pe-5 btn-sm silbtn">Chooose</button>
                                </li>
                            
                            </ul>                            

                        </div>
                        {/* <!-- free plan card end --> */}

                    </div>
                    {/* <!-- free plan ends --> */}

                    {/* <!-- gold plan starts --> */}
                    <div class="col-md-3">

                        {/* <!-- gold plan card start --> */}
                        <div class="card pb-5" style={{width: "20rem"}}>

                            {/* <!-- head part in gold plan card --> */}
                            <div class="card-header text-center mt-3">

                                <h6 class="mx-5" style={{color: "#FF7000"}}>Gold Plan 
                                    <button class="btn btn-dark btn-sm pe-4 px-4 popularbtn rounded-pill"><small>Popular</small></button>
                                </h6>
                                <h3><span class="material-icons-outlined">currency_rupee</span>05<span>K</span></h3>
                                <p><small class="text-muted">Per member Per Month</small></p>

                            </div>
                            
                            {/* <!-- list part in gold plan card --> */}
                            <ul class="list-group">

                                <li class="list-group-item"><i class="fa-solid fa-circle"></i><b>Everything in a Silver plan</b><br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Custom QR code(Unlimited QR codes)<br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Creation of special offers and discounts<br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Contactless payments<br/><br/><br/>
                                <button type="button" class="btn px-5 pe-5 navbtn btn-sm">Chooose</button>
                                </li>

                            </ul>
                            
                        </div>
                        {/* <!-- gold plan card end --> */}

                    </div>
                    {/* <!-- gold plan ends --> */}

                    {/* <!-- silver plan starts --> */}
                    <div class="col-md-4 mt-5">

                        {/* <!-- silver plan card start --> */}
                        <div class="card pb-5" style={{width: "18rem"}}>

                            {/* <!-- head part in silver plan card --> */}
                            <div class="card-header text-center mt-3">

                                <h6 style={{color: "#FF7000"}}>Silver plan</h6>
                                <h3><span class="material-icons-outlined">currency_rupee</span>04<span>K</span></h3>
                                <p><small class="text-muted">Per member Per Month</small></p>

                            </div>
                            
                            {/* <!-- list part in silver plan card --> */}
                            <ul class="list-group">

                                <li class="list-group-item"><i class="fa-solid fa-circle"></i><b>Everything in a Free plan</b><br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Custom QR code(25 QR codes)<br/>
                                <i class="fa fa-check" aria-hidden="true"></i>Choose your own theme<br/>
                                <i class="fa fa-check" aria-hidden="true"></i>24*7 customer support<br/><br/><br/>
                                <button type="button" class="btn px-5 pe-5 btn-sm silbtn">Chooose</button>
                                </li> 
                            
                            </ul>
                            
                        </div>
                        {/* <!-- silver plan card end --> */}

                    </div>
                    {/* <!-- silver plan ends --> */}

                </div>
                {/* <!-- row ends --> */}

            </div>
            {/* <!-- monthly button ends --> */}

        </div>
        {/* container fluid ends */}
        
        </>
    );
}

export default monthly;

