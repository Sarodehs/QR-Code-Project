import React from "react";

const home = () => {

    return(
        <>

        {/* container fluid starts */}
        <div class="container-fluid">

            {/* <!-- banner starts --> */}
            <div class="banner mt-3 mb-5">

                {/* main row starts */}
                <div class="row mt-5">

                    {/* first col in main row starts */}
                    <div class="col-xl-3 col-md-6 col-sm-6 px-5 mx-5 bannerleft">

                        <h1 class="mt-5 contactless">Contactless</h1>
                        <h3 class="mt-4">QR Code Menus</h3>
                        <p class="mt-4 text-muted">You serve your customers.<br/>We serve you.</p>
                        <a href="#" class="btn btn-sm px-4 pe-4 mt-5 navbtn">GET FREE DEMO</a>
                        <a href="#" class="btn btn-sm px-4 pe-4 mt-5">PRICING</a>
                    
                    </div>
                    {/* first col in main row ends */}

                    {/* second col in main row starts */}
                    <div class="col-xl-1  col-md-2 col-sm-4 mt-5 pt-5">

                        <img src="../assets/images/downarrow.png" class="homebannerdownarrow" height="110px" width="90%" alt="downarrow"/>
                    
                    </div>
                    {/* second col in main row ends */}

                    {/* third col in main row starts */}
                    <div class="col-xl-5  col-md-10 col-sm-10 mt-5 pt-5 bannerright">

                        <div class="row">

                            <div class="col-md-2"></div>

                            <div class="col-md-3 cust">

                                <p>Trusted By</p>
                                <h1 class="number">167+</h1>
                                <p><small>Customers</small></p>
                            
                            </div>

                            <div class="col-md-5">

                                <p>In</p>
                                <h1 class="number">13+</h1>
                                <p><small>Cities</small></p>
                            
                            </div>

                        </div>
                        
                        {/* cities starts */}
                        <div id="cities">  
                            
                            {/* dropdown starts */}
                            <div class="dropdown mx-5 mt-5">

                                {/* dropdown button */}
                                <button class="btn btn-sm text-muted mx-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  We Served in<span class="material-icons-outlined mx-2 homebtnarrow">chevron_right</span>
                                </button>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                  <li><a class="dropdown-item" href="#"></a><p><small class="mx-3 text-muted">Selected City</small></p></li>

                                  <li><a class="dropdown-item" href="#">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1"><small class="text-muted">Pune</small></label>
                                    </div>
                                  </a></li>

                                  <li><a class="dropdown-item" href="#">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1"><small class="text-muted">Mumbai</small></label>
                                    </div>
                                  </a></li>

                                  <li><a class="dropdown-item" href="#">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1"><small class="text-muted">Nashik</small></label>
                                    </div>
                                  </a></li>

                                  <li><a class="dropdown-item" href="#">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1"><small class="text-muted">Kolhapur</small></label>
                                    </div>
                                  </a></li>

                                  <li><a class="dropdown-item" href="#">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1"><small class="text-muted">Banglore</small></label>
                                    </div>
                                  </a></li>
                                  
                                </ul>

                            </div>
                            {/* dropdown ends */}

                        </div>
                        {/* cities ends */}

                    </div>
                    {/* third col in main row ends */}

                </div>
                {/* main row ends */}

            </div>
            {/* <!-- banner ends --> */}
            
            {/* <!-- scan menu starts --> */}
            <div class="m-5 scanmenu text-center">

                {/* row starts */}
                <div class="row mb-5">

                    {/* qr menu */}
                    <div class="col-xl-2 qrmenu">
                        <img src="../assets/images/QRmenu.png" alt="qrmenu" width="90%" height="50%"></img>
                        <h3 class="pt-4">QR Menu</h3>
                    </div>

                    {/* scan qr */}
                    <div class="col-xl-3 scanqr">
                        <img src="../assets/images/scanqr.png" alt="scanqr" width="75%" height="80%"></img>
                        <h2>Scan QR</h2>
                    </div>

                    {/* open menu */}
                    <div class="col-xl-3 openmenu">
                        <img src="../assets/images/openmenu.png" alt="openmenu" width="90%" height="90%"></img>
                        <h2>Open Menu</h2>
                    </div>

                    {/* place order */}
                    <div class="col-xl-3 placeorder">
                        <img src="../assets/images/placeorder.png" alt="placeorder" width="100%" height="100%"></img>  
                        <h2>Place Order</h2>
                    </div>

                </div>
                {/* row ends */}
                
            </div>
            {/* <!-- scan menu ends --> */}

            {/* <!-- procedure starts --> */}
            <div class="procedure mt-5 mb-5">

                {/* main row in procedure starts */}
                <div class="row mb-5 mt-5">

                    {/* first col in main row of procedure starts */}
                    <div class="col-xl-4">

                        {/* scan me card starts */}
                        <div class="card scancard pt-4 text-center">

                            <h6 class="mb-3">Scan me</h6>
                            <img src="../assets/images/scancode.png" alt="scan code" height="50%" width="50%" class="offset-3"/>
                            <p class="pt-3"><small>View Menu,<br/>Order & Pay</small></p>
                        
                        </div>
                        {/* scan me card ends */}

                        {/* menu card starts */}
                        <div class="card mx-5 menucard">

                            <h6 class="mt-3 mx-5">Filters</h6>
                            <button type="btn" class="btn btn-sm btn-outline-dark mt-4 menubtn"><b>Menu</b></button>
                            
                            <ul class="list-group mt-3">
                                <li class="list-group-item">Recommended</li>
                                <li class="list-group-item">Sharing Plates</li>
                                <li class="list-group-item">Mains</li>
                                <li class="list-group-item">Rice & Biryani</li>
                                <li class="list-group-item">Soups</li>
                                <li class="list-group-item">Fries</li>
                                <li class="list-group-item">Mojitos</li>
                                <li class="list-group-item">Dessert</li>
                                <li class="list-group-item">Tea & Coffee</li>
                            </ul>

                        </div>
                        {/* menu card ends */}

                        {/* call waiter card starts */}
                        <div class="card me-5 waitcard text-center">

                            <h6 class="mt-4">Call Waiter</h6>
                            <span class="material-icons bellicon mt-2">circle_notifications</span>
                        
                        </div>
                        {/* call waiter card ends */}

                    </div>
                    {/* first col in main row of procedure ends */}

                    {/* second col in main row of procedure starts */}
                    <div class="col-lg-3">
                        <img src="./assets/images/Video Process.png" class="mt-5 pt-5 mx-5 videoprocess" alt="video screen" height="70%" width="80%"/>
                    </div>
                    {/* second col in main row of procedure ends */}

                    {/* third col in main row of procedure ends */}
                    <div class="col-lg-4 mt-3 colthree">

                        {/* Menu options card starts */}
                        <div class="card optioncard">

                            <div>

                                <h6 class="pt-4 px-5">Menu Options</h6>
                                <img src="../assets/images/greenbtn.png" class="mx-3" alt="green btn" height="40px" width="40px"/>
                                <b>Baby Potatoes</b><br/>  
                                <small class="mx-5 px-2"><i class="fa-solid fa-indian-rupee-sign"></i><b>220</b></small>                       
                                <small class="chefspecial">Chef's Special</small><br/>
                                <blockquote class="mx-5"><small>Italian baby potatoes is <br/>cooked with olive oil, chilli <br/>flakes and oregano</small></blockquote>
                            
                            </div>
                                
                            <div class="mx-auto">

                                <img src="../assets/images/potatoimg.png" alt="baby potatoes" height="70px" width="70px" class="potatoimg"/>
                                <button type="button" class="btn btn-outline-dark btn-sm addbtn"><b>ADD</b></button>
                                
                            </div>
                            
                        </div>
                        {/* menu options card ends */}

                        {/* payment methods card starts */}
                        <div class="card paycard">

                            <h6 class="px-4 pt-4">Select your payment method</h6>

                            {/* accordion for payment methods starts */}
                            <div class="paymethod mt-4">
                
                                {/* accordion starts */}
                                <div class="accordion accordion-flush offset-1" id="accordionFlushExample">
                
                                    {/* google pay */}
                                    <div class="accordion-item">
                
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <img src="../assets/images/gpay.png" alt="Google pay"/> Google Pay
                                            </button>
                                        </h2>
                
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                    {/* phone pe */}
                                    <div class="accordion-item">
                
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                <img src="../assets/images/phonepe.png" alt="Phone pe"/> Phone Pe
                                            </button>
                                        </h2>
                
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                    {/* paytm upi */}
                                    <div class="accordion-item">
                
                                        <h2 class="accordion-header" id="flush-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                <img src="../assets/images/paytm.png" alt="paytm upi"/> Paytm UPI
                                            </button>
                                        </h2>
                
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                    {/* pay via upi */}
                                    <div class="accordion-item">
                
                                        <h2 class="accordion-header" id="flush-headingFour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                <img src="../assets/images/upi.png" alt="upi"/> Pay via UPI
                                            </button>
                                        </h2>
                
                                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                    {/* pay via cash */}
                                    <div class="accordion-item">
                
                                        <h2 class="accordion-header" id="flush-headingFive">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                <img src="../assets/images/cash.png" alt="cash"/> Pay via Cash
                                            </button>
                                        </h2>
                                        
                                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                </div>
                                {/* accordion ends */}
                
                            </div>
                            {/* accordion for payment methods ends */}
                            
                        </div>
                        {/* payment methods card ends */}

                        {/* order placed card starts */}
                        <div class="card ordercard text-center">

                            <span class="material-icons bellicon mt-4">check_circle</span>
                            <p class="mt-2">ORDER PLACED</p>
                        
                        </div>
                        {/* order placed card ends */}

                    </div>
                    {/* third col in main row of procedure ends */}

                </div>
                {/* main row in procedure ends */}

            </div>
            {/* <!-- procedure ends --> */}

            {/* <!-- our offerings start --> */}
            <div class="offerings mt-5 mb-5">

                <h2 class="mx-5 pt-4">Our Offerings</h2>

                {/* offerings row starts */}
                <div class="row mx-5">

                    {/* first col in offerings starts*/}
                    <div class="col-xl-3 px-4 offeringsleft">

                        <h6 class="pt-5 mt-5 pb-5">contactless QR menus.No downloading. No app..!</h6>
                        <p class="text-muted pb-4">Join QR Scanner for Restaurants and 
                            together we’ll increase your sales....   </p>
                        <button type="button" class="btn btn-sm px-4 pe-4 mb-5 navbtn">FREE DEMO</button>
                    
                    </div>
                    {/* first col in offerings ends */}
                    
                    {/* second col in offerings starts */}
                    <div class="col-xl-8">
                       
                        <h5 class="pt-4 px-4">Say "yes" to simplicity...</h5>
                        <img src="../assets/images/offeringsimg.png" alt="offerimg" height="400px" width="100%" class="offerimg"/>
                            
                    </div>
                    {/* second col in offerings ends */}

                </div>
                {/* offerings row ends */}

            </div>
            {/* <!-- our offerings end --> */}

            {/* <!-- why choose us starts --> */}
            <div class="wcu mb-5 mt-5">

                <h2 class="pt-5 mx-4 px-5">Why Choose Us ? </h2>

                {/* row in why choose us starts */}
                <div class="row">

                    {/* first col in why choose us starts */}
                    <div class="col-md-4 mx-4 pt-5 wculist">

                        <ul>

                            <li>Simplified Menu Management</li>
                            <li>Multi-location Support</li>
                            <li>QR Code Menus</li>
                            <li>Order bill Collection</li>
                            <li>Contactless order from dine-in table.</li>

                        </ul>

                    </div>
                    {/* first col in why choose us ends */}

                    {/* second col in why choose us starts */}
                    <div class="col-md-2">
                        <img src="../assets/images/Old day-pana.png" height="250px" width="300px" class="mt-5 pt-5 ladyimg" alt="ladyimg"/>
                    </div>
                    {/* second col in why choose us ends */}

                    {/* third col in why choose us starts */}
                    <div class="col-md-3 text-center">

                        <h3><span>Try our Service </span><br/>Free <span>for</span> 30 Days</h3>
                        <img src="../assets/images/downarrow.png" height="120px" width="120px" class="mx-5 pt-3" alt="downarrow"/><br/>
                        <button type="button" class="btn pe-5 px-5 mx-4 mb-5 navbtn wcupricing">Pricing</button>
                    
                    </div>
                    {/* third col in why choose us ends */}

                </div>
                {/* row in why choose us ends */}

            </div>
            {/* <!-- why choose us ends--> */}

            {/* <!-- key features starts --> */}
            <div class="keyfeatures">

                {/* row in key features starts */}
                <div class="row mt-5 pt-5 mx-5 mb-5">

                    {/* first col in key features starts */}
                    <div class="col-xl-6 col-md-4 col-sm-4">

                        <h2 class="mb-5">Our Key Features...</h2>
                        <img src="../assets/images/resmenu.png" height="300px" width="600px" class="mb-4 resmenu" alt="resmenu"/>
                        <button type="button" class="btn px-4 pe-4 mt-3 btn-sm text-center navbtn">REQUEST FOR DEMO</button>

                    </div>
                    {/* first col in key features ends */}

                    {/* second col in key features starts */}
                    <div class="col-xl-4 col-md-6 col-sm-6 pt-4 mx-4 contactless">
                        
                        <p><b>Guests can access contactless ordering and payment via  a mobile website without needing to download an app.</b></p>
                        
                        {/* contactless menu */}
                        <h5 class="pt-3">Contactless Menu</h5>
                        <p>By scanning the QR code at their table, guests can view the full menu, add items to their order, and view the check using their phone.</p>
                        
                        {/*contactless order  */}
                        <h5 class="pt-3">Contactless Order</h5>
                        <p>Once they place the order, it is displayed on our tablet next to the POS device. Our system allows additional items to be added to your POS device at any time.</p>
                        
                        {/* contactless payment */}
                        <h5 class="pt-3">Contactless Payment</h5>
                        <p>When guests are ready to leave, their check can be posted via the tablet and they can pay the check securely using their own phone.</p>
                    
                    </div>
                    {/* second col in key features ends */}

                </div>
                {/* row in key features ends */}

            </div>
            {/* <!-- key features ends --> */}

            {/* <!-- try our service starts --> */}
            <div class="try mb-5">

                {/* row starts */}
                <div class="row">

                    {/* first col in try our services starts */}
                    <div class="col-md-6 mx-5">

                        <h2 class="mb-5">Try Our Service<br/><span>Free </span>for<span> 30 Days</span></h2>
                        
                        {/* overlapping cards starts */}
                        <div>

                            <div class="card one"></div>

                            <div class="card two"></div>

                            <div class="card three">

                                <img src="../assets/images/p2.png" height="50px" width="50px" class="p-4" alt="person"/>
                                <p class="px-4">Qr Scanner is a intuitive and affordable options our match perfectly. I am now so happy to use this system Its save time</p>
                                <p class="px-4 mb-4"> Mr. Sonal Rathi</p>
                            
                            </div>

                            {/* arrows near the overlapping cards */}
                            <div class="tryarrow">

                                <img src="../assets/images/tryarrow.png" alt="try arrow" height="70px"/><br/>
                                <img src="../assets/images/trybackarrow.png" alt="try back arrow" height="35pc"/>
                            
                            </div>

                            <h4 class="mt-5 pt-5">Try Our Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Free</b> for <b>30 days</b></h4>

                        </div>
                        {/* overlapping cards ends */}

                    </div>
                    {/* first col in try our services ends */}

                    {/* second col in try our services starts */}
                    <div class="col-md-4">

                        {/* card in second col starts */}
                        <div class="card cardform m-5">

                            <h3 class="mb-5 mt-4 text-center">Get a demo</h3>

                            {/* form starts */}
                            <form class="mx-5 mb-5 pt-3">

                                <input type="text" placeholder="Name" class="px-3"/><br/><br/> 
                                <input type="email" placeholder="E-mail" class="px-3"/><br/><br/>
                                <input type="tel" placeholder="Phone no" class="px-3"/><br/><br/>
                                <input type="text" placeholder="City" class="px-3"/><br/>
                            
                            </form>
                            {/* form ends */}

                            <button type="button" class="btn mx-5 me-5 px-4 pe-4 mt-3 mb-5 btn-sm navbtn tosrequest" >REQUEST FOR DEMO</button>

                        </div>
                        {/* card in second col ends */}

                    </div>
                    {/* second col in try our sevices ends */}

                </div>
                {/* row ends */}

            </div>
            {/* <!-- try our service ends --> */}


        </div>
        {/* container fluid ends */}

        </>
    );
    
}

export default home;




