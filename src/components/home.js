import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

const home = () => {

    return(
        <>

        {/* container fluid starts */}
        <div className="container-fluid">

            <Menu />

            {/* <!-- banner starts --> */}
            <div className="banner mt-3 mb-5">

                {/* main row starts */}
                <div className="row mt-5">

                    {/* first col in main row starts */}
                    <div className="col-xl-3 col-md-6 col-sm-6 px-5 mx-5 bannerleft">

                        <h1 className="mt-5 contactless">Contactless</h1>
                        <h3 className="mt-4">QR Code Menus</h3>
                        <p className="mt-4 text-muted">You serve your customers.<br/>We serve you.</p>
                        <a href="/#" className="btn btn-sm px-4 pe-4 mt-5 navbtn">GET FREE DEMO</a>
                        <a href="/#" className="btn btn-sm px-4 pe-4 mt-5">PRICING</a>
                    
                    </div>
                    {/* first col in main row ends */}

                    {/* second col in main row starts */}
                    <div className="col-xl-1  col-md-2 col-sm-4 mt-5 pt-5">

                        <img src="../assets/images/downarrow.png" className="homebannerdownarrow" height="110px" width="90%" alt="downarrow"/>
                    
                    </div>
                    {/* second col in main row ends */}

                    {/* third col in main row starts */}
                    <div className="col-xl-5  col-md-10 col-sm-10 mt-5 pt-5 bannerright">

                        <div className="row">

                            <div className="col-md-2"></div>

                            <div className="col-md-3 cust">

                                <p>Trusted By</p>
                                <h1 className="number">167+</h1>
                                <p><small>Customers</small></p>
                            
                            </div>

                            <div className="col-md-5">

                                <p>In</p>
                                <h1 className="number">13+</h1>
                                <p><small>Cities</small></p>
                            
                            </div>

                        </div>
                        
                        {/* cities starts */}
                        <div id="cities">  
                            
                            {/* dropdown starts */}
                            <div className="dropdown mx-5 mt-5">

                                {/* dropdown button */}
                                <button className="btn btn-sm text-muted mx-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  We Served in<span className="material-icons-outlined mx-2 homebtnarrow">chevron_right</span>
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                  <li><p><small className="mx-3 text-muted">Selected City</small></p></li>

                                  <li><a className="dropdown-item" href="/#">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1"><small className="text-muted">Pune</small></label>
                                    </div>
                                  </a></li>

                                  <li><a className="dropdown-item" href="/#">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1"><small className="text-muted">Mumbai</small></label>
                                    </div>
                                  </a></li>

                                  <li><a className="dropdown-item" href="/#">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1"><small className="text-muted">Nashik</small></label>
                                    </div>
                                  </a></li>

                                  <li><a className="dropdown-item" href="/#">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1"><small className="text-muted">Kolhapur</small></label>
                                    </div>
                                  </a></li>

                                  <li><a className="dropdown-item" href="/#">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1"><small className="text-muted">Banglore</small></label>
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
            <div className="m-5 scanmenu text-center">

                {/* row starts */}
                <div className="row mb-5">

                    {/* qr menu */}
                    <div className="col-xl-2 qrmenu">
                        <img src="../assets/images/QRmenu.png" alt="qrmenu" width="90%" height="50%"></img>
                        <h3 className="pt-4">QR Menu</h3>
                    </div>

                    {/* scan qr */}
                    <div className="col-xl-3 scanqr">
                        <img src="../assets/images/scanqr.png" alt="scanqr" width="75%" height="80%"></img>
                        <h2>Scan QR</h2>
                    </div>

                    {/* open menu */}
                    <div className="col-xl-3 openmenu">
                        <img src="../assets/images/openmenu.png" alt="openmenu" width="90%" height="90%"></img>
                        <h2>Open Menu</h2>
                    </div>

                    {/* place order */}
                    <div className="col-xl-3 placeorder">
                        <img src="../assets/images/placeorder.png" alt="placeorder" width="100%" height="100%"></img>  
                        <h2>Place Order</h2>
                    </div>

                </div>
                {/* row ends */}
                
            </div>
            {/* <!-- scan menu ends --> */}

            {/* <!-- procedure starts --> */}
            <div className="procedure mt-5 mb-5">

                {/* main row in procedure starts */}
                <div className="row mb-5 mt-5">

                    {/* first col in main row of procedure starts */}
                    <div className="col-xl-4">

                        {/* scan me card starts */}
                        <div className="card scancard pt-4 text-center">

                            <h6 className="mb-3">Scan me</h6>
                            <img src="../assets/images/scancode.png" alt="scan code" height="50%" width="50%" className="offset-3"/>
                            <p className="pt-3"><small>View Menu,<br/>Order & Pay</small></p>
                        
                        </div>
                        {/* scan me card ends */}

                        {/* menu card starts */}
                        <div className="card mx-5 menucard">

                            <h6 className="mt-3 mx-5">Filters</h6>
                            <button type="btn" className="btn btn-sm btn-outline-dark mt-4 menubtn"><b>Menu</b></button>
                            
                            <ul className="list-group mt-3">
                                <li className="list-group-item">Recommended</li>
                                <li className="list-group-item">Sharing Plates</li>
                                <li className="list-group-item">Mains</li>
                                <li className="list-group-item">Rice & Biryani</li>
                                <li className="list-group-item">Soups</li>
                                <li className="list-group-item">Fries</li>
                                <li className="list-group-item">Mojitos</li>
                                <li className="list-group-item">Dessert</li>
                                <li className="list-group-item">Tea & Coffee</li>
                            </ul>

                        </div>
                        {/* menu card ends */}

                        {/* call waiter card starts */}
                        <div className="card me-5 waitcard text-center">

                            <h6 className="mt-4">Call Waiter</h6>
                            <span className="material-icons bellicon mt-2">circle_notifications</span>
                        
                        </div>
                        {/* call waiter card ends */}

                    </div>
                    {/* first col in main row of procedure ends */}

                    {/* second col in main row of procedure starts */}
                    <div className="col-lg-3">
                        <img src="./assets/images/Video Process.png" className="mt-5 pt-5 mx-5 videoprocess" alt="video screen" height="70%" width="80%"/>
                    </div>
                    {/* second col in main row of procedure ends */}

                    {/* third col in main row of procedure ends */}
                    <div className="col-lg-4 mt-3 colthree">

                        {/* Menu options card starts */}
                        <div className="card optioncard">

                            <div>

                                <h6 className="pt-4 px-5">Menu Options</h6>
                                <img src="../assets/images/greenbtn.png" className="mx-3" alt="green btn" height="40px" width="40px"/>
                                <b>Baby Potatoes</b><br/>  
                                <small className="mx-5 px-2"><i className="fa-solid fa-indian-rupee-sign"></i><b>220</b></small>                       
                                <small className="chefspecial">Chef's Special</small><br/>
                                <blockquote className="mx-5"><small>Italian baby potatoes is <br/>cooked with olive oil, chilli <br/>flakes and oregano</small></blockquote>
                            
                            </div>
                                
                            <div className="mx-auto">

                                <img src="../assets/images/potatoimg.png" alt="baby potatoes" height="70px" width="70px" className="potatoimg"/>
                                <button type="button" className="btn btn-outline-dark btn-sm addbtn"><b>ADD</b></button>
                                
                            </div>
                            
                        </div>
                        {/* menu options card ends */}

                        {/* payment methods card starts */}
                        <div className="card paycard">

                            <h6 className="px-4 pt-4">Select your payment method</h6>

                            {/* accordion for payment methods starts */}
                            <div className="paymethod mt-4">
                
                                {/* accordion starts */}
                                <div className="accordion accordion-flush offset-1" id="accordionFlushExample">
                
                                    {/* google pay */}
                                    <div className="accordion-item">
                
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <img src="../assets/images/gpay.png" alt="Google pay"/> Google Pay
                                            </button>
                                        </h2>
                
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                    {/* phone pe */}
                                    <div className="accordion-item">
                
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                <img src="../assets/images/phonepe.png" alt="Phone pe"/> Phone Pe
                                            </button>
                                        </h2>
                
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                    {/* paytm upi */}
                                    <div className="accordion-item">
                
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                <img src="../assets/images/paytm.png" alt="paytm upi"/> Paytm UPI
                                            </button>
                                        </h2>
                
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                    {/* pay via upi */}
                                    <div className="accordion-item">
                
                                        <h2 className="accordion-header" id="flush-headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                <img src="../assets/images/upi.png" alt="upi"/> Pay via UPI
                                            </button>
                                        </h2>
                
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                    {/* pay via cash */}
                                    <div className="accordion-item">
                
                                        <h2 className="accordion-header" id="flush-headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                <img src="../assets/images/cash.png" alt="cash"/> Pay via Cash
                                            </button>
                                        </h2>
                                        
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Pay</div>
                                        </div>
                
                                    </div>
                
                                </div>
                                {/* accordion ends */}
                
                            </div>
                            {/* accordion for payment methods ends */}
                            
                        </div>
                        {/* payment methods card ends */}

                        {/* order placed card starts */}
                        <div className="card ordercard text-center">

                            <span className="material-icons bellicon mt-4">check_circle</span>
                            <p className="mt-2">ORDER PLACED</p>
                        
                        </div>
                        {/* order placed card ends */}

                    </div>
                    {/* third col in main row of procedure ends */}

                </div>
                {/* main row in procedure ends */}

            </div>
            {/* <!-- procedure ends --> */}

            {/* <!-- our offerings start --> */}
            <div className="offerings mt-5 mb-5">

                <h2 className="mx-5 pt-4">Our Offerings</h2>

                {/* offerings row starts */}
                <div className="row mx-5">

                    {/* first col in offerings starts*/}
                    <div className="col-xl-3 px-4 offeringsleft">

                        <h6 className="pt-5 mt-5 pb-5">contactless QR menus.No downloading. No app..!</h6>
                        <p className="text-muted pb-4">Join QR Scanner for Restaurants and 
                            together we’ll increase your sales....   </p>
                        <button type="button" className="btn btn-sm px-4 pe-4 mb-5 navbtn">FREE DEMO</button>
                    
                    </div>
                    {/* first col in offerings ends */}
                    
                    {/* second col in offerings starts */}
                    <div className="col-xl-8">
                       
                        <h5 className="pt-4 px-4">Say "yes" to simplicity...</h5>
                        <img src="../assets/images/offeringsimg.png" alt="offerimg" height="400px" width="100%" className="offerimg"/>
                            
                    </div>
                    {/* second col in offerings ends */}

                </div>
                {/* offerings row ends */}

            </div>
            {/* <!-- our offerings end --> */}

            {/* <!-- why choose us starts --> */}
            <div className="wcu mb-5 mt-5">

                <h2 className="pt-5 mx-4 px-5">Why Choose Us ? </h2>

                {/* row in why choose us starts */}
                <div className="row">

                    {/* first col in why choose us starts */}
                    <div className="col-md-4 mx-4 pt-5 wculist">

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
                    <div className="col-md-2">
                        <img src="../assets/images/Old day-pana.png" height="250px" width="300px" className="mt-5 pt-5 ladyimg" alt="ladyimg"/>
                    </div>
                    {/* second col in why choose us ends */}

                    {/* third col in why choose us starts */}
                    <div className="col-md-3 text-center">

                        <h3><span>Try our Service </span><br/>Free <span>for</span> 30 Days</h3>
                        <img src="../assets/images/downarrow.png" height="120px" width="120px" className="mx-5 pt-3" alt="downarrow"/><br/>
                        <button type="button" className="btn pe-5 px-5 mx-4 mb-5 navbtn wcupricing">Pricing</button>
                    
                    </div>
                    {/* third col in why choose us ends */}

                </div>
                {/* row in why choose us ends */}

            </div>
            {/* <!-- why choose us ends--> */}

            {/* <!-- key features starts --> */}
            <div className="keyfeatures">

                {/* row in key features starts */}
                <div className="row mt-5 pt-5 mx-5 mb-5">

                    {/* first col in key features starts */}
                    <div className="col-xl-6 col-md-4 col-sm-4">

                        <h2 className="mb-5">Our Key Features...</h2>
                        <img src="../assets/images/resmenu.png" height="300px" width="600px" className="mb-4 resmenu" alt="resmenu"/>
                        <button type="button" className="btn px-4 pe-4 mt-3 btn-sm text-center navbtn">REQUEST FOR DEMO</button>

                    </div>
                    {/* first col in key features ends */}

                    {/* second col in key features starts */}
                    <div className="col-xl-4 col-md-6 col-sm-6 pt-4 mx-4 contactless">
                        
                        <p><b>Guests can access contactless ordering and payment via  a mobile website without needing to download an app.</b></p>
                        
                        {/* contactless menu */}
                        <h5 className="pt-3">Contactless Menu</h5>
                        <p>By scanning the QR code at their table, guests can view the full menu, add items to their order, and view the check using their phone.</p>
                        
                        {/*contactless order  */}
                        <h5 className="pt-3">Contactless Order</h5>
                        <p>Once they place the order, it is displayed on our tablet next to the POS device. Our system allows additional items to be added to your POS device at any time.</p>
                        
                        {/* contactless payment */}
                        <h5 className="pt-3">Contactless Payment</h5>
                        <p>When guests are ready to leave, their check can be posted via the tablet and they can pay the check securely using their own phone.</p>
                    
                    </div>
                    {/* second col in key features ends */}

                </div>
                {/* row in key features ends */}

            </div>
            {/* <!-- key features ends --> */}

            {/* <!-- try our service starts --> */}
            <div className="try mb-5">

                {/* row starts */}
                <div className="row">

                    {/* first col in try our services starts */}
                    <div className="col-md-6 mx-5">

                        <h2 className="mb-5">Try Our Service<br/><span>Free </span>for<span> 30 Days</span></h2>
                        
                        {/* overlapping cards starts */}
                        <div>

                            <div className="card one"></div>

                            <div className="card two"></div>

                            <div className="card three">

                                <img src="../assets/images/p2.png" height="50px" width="50px" className="p-4" alt="person"/>
                                <p className="px-4">Qr Scanner is a intuitive and affordable options our match perfectly. I am now so happy to use this system Its save time</p>
                                <p className="px-4 mb-4"> Mr. Sonal Rathi</p>
                            
                            </div>

                            {/* arrows near the overlapping cards */}
                            <div className="tryarrow">

                                <img src="../assets/images/tryarrow.png" alt="try arrow" height="70px"/><br/>
                                <img src="../assets/images/trybackarrow.png" alt="try back arrow" height="35pc"/>
                            
                            </div>

                            <h4 className="mt-5 pt-5">Try Our Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Free</b> for <b>30 days</b></h4>

                        </div>
                        {/* overlapping cards ends */}

                    </div>
                    {/* first col in try our services ends */}

                    {/* second col in try our services starts */}
                    <div className="col-md-4">

                        {/* card in second col starts */}
                        <div className="card cardform m-5">

                            <h3 className="mb-5 mt-4 text-center">Get a demo</h3>

                            {/* form starts */}
                            <form className="mx-5 mb-5 pt-3">

                                <input type="text" placeholder="Name" className="px-3"/><br/><br/> 
                                <input type="email" placeholder="E-mail" className="px-3"/><br/><br/>
                                <input type="tel" placeholder="Phone no" className="px-3"/><br/><br/>
                                <input type="text" placeholder="City" className="px-3"/><br/>
                            
                            </form>
                            {/* form ends */}

                            <Link to="home/registernow/"><button type="button" className="btn mx-5 me-5 px-4 pe-4 mt-3 mb-5 btn-sm navbtn tosrequest" >REQUEST FOR DEMO</button></Link>

                        </div>
                        {/* card in second col ends */}

                    </div>
                    {/* second col in try our sevices ends */}

                </div>
                {/* row ends */}

            </div>
            {/* <!-- try our service ends --> */}

            <Footer />

        </div>
        {/* container fluid ends */}

        </>
    );
    
}

export default home;




