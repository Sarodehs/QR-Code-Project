const hrstyle ={
    width: "50%",
    margin: '13% !important'
}

const checkout = () => {
    return(
        <>
        
        {/* <!-- container-fluid starts --> */}
        <div class="container-fluid">
            
            {/* checkout starts */}
            <div class="mb-5 checkout">

                <h2 class="p-4 mx-5">Checkout</h2>

                {/* main row starts */}
                <div class="row">

                    {/* main row col first starts */}
                    <div class="col-xl-5 text-center">

                        {/* main card in first col starts*/}
                        <div class="card mt-4 mx-5 mb-5 planmain">

                            <p class="pt-4"><small>Selected Plan</small></p>
                            <h5 class="mb-4">Monthly Silver Plan</h5>

                            {/* sub card in first col starts*/}
                            <div class="card mx-5 plansub">

                                {/* header text in sub card */}
                                <div>

                                    <h6 class="pt-4 siltext">Silver Plan</h6>
                                    <p class="pt-2"><i class="fa-solid fa-indian-rupee-sign"></i><span class="silspan">02</span>K</p>
                                    <p><small class="text-muted">Per member Per Month</small></p>
                                
                                </div>
                                {/* header text ends*/}

                                <hr class="mx-4" style={{width: "90%"}}/>

                                {/* list part in sub card */}
                                <div class="text-start provide">

                                    <ul style="list-style: none;">

                                        <li><span class="material-icons-outlined me-3">done</span>Custom QR code(25 QR codes)</li>
                                        <li><span class="material-icons-outlined me-3">done</span>Choose your own theme</li>
                                        <li><span class="material-icons-outlined me-3">done</span>24*7 customer support</li>
                                        <li><span class="material-icons-outlined me-3">done</span>Easy upload of menu in the system</li>
                                        <li><span class="material-icons-outlined me-3">done</span>Digital menus on the table of your restaurant</li>
                                        <li><span class="material-icons-outlined me-3">done</span>Online menu editing in webpage</li>
                                        <li><span class="material-icons-outlined me-3">done</span>Easy upload of menu on the system</li>
                                        <li><span class="material-icons-outlined me-3">done</span>Unlimited adding of menu items</li>
                                        <li><span class="material-icons-outlined me-3">done</span>Custom QR code(10 QR codes)</li>
                                    
                                    </ul>

                                </div>
                                {/* list part in sub card ends */}

                            </div>
                            {/* sub card in first col ends */}

                            <p class="m-5"><small>Subscription cancel Anytime</small></p>

                        </div>
                        {/* main card in first col ends */}

                    </div>
                    {/* main row col first ends */}

                    {/* main row col second starts */}
                    <div class="col-xl-6">

                        {/* userinfo first card in second col starts*/}
                        <div class="card mb-5 mx-5 userinfo">

                            {/* ul in userinfo starts */}
                            <ul class="list-group">

                                {/* first li containing name starts */}
                                <li class="list-group-item">

                                    <div class="row px-2">

                                        <div class="col-xl-2"><h6>Name</h6></div>
                                        <div class="col-xl-7">Kunal Balkrushna Nemade</div>
                                        <div class="col-xl-1"><span class="material-icons-outlined editicon">edit</span></div>
                                    
                                    </div>

                                </li>
                                {/* first li containing name ends */}

                                {/* second li containing email starts */}
                                <li class="list-group-item">

                                    <div class="row px-2">

                                        <div class="col-xl-2"><h6>Email</h6></div>
                                        <div class="col-xl-7">KunalBNemade@gmail.com</div>
                                        <div class="col-xl-1"><span class="material-icons-outlined editicon">edit</span></div>
                                    
                                    </div>

                                </li>
                                {/* second li containing email ends */}

                                {/* third li containing phone starts */}
                                <li class="list-group-item">

                                    <div class="row px-2">

                                        <div class="col-xl-2"><h6>Phone</h6></div>
                                        <div class="col-xl-7">+91 98653 78451</div>
                                        <div class="col-xl-1"><span class="material-icons-outlined editicon">edit</span></div>
                                    
                                    </div>

                                </li>
                                {/* third li containing phone ends */}

                            </ul>
                            {/* ul in userinfo ends */}

                        </div>
                        {/* userinfo first card in second col ends*/}

                        {/* plandetails second card in second col starts */}
                        <div class="card mb-5 mx-5 plandetails">

                            {/* ul in plandetails starts */}
                            <ul class="list-group">

                                {/* first li cointaining selected plan starts */}
                                <li class="list-group-item">

                                    <div class="row px-4">

                                        <div class="col-xl-4"><p><small class="text-muted">Selected Subscription</small></p></div>
                                        <div class="col-xl-6"><h5>Monthly Silver Plan</h5></div>
                                    
                                    </div>

                                </li>
                                {/* first li containing selected plan ends */}

                                {/* second li containing validity starts */}
                                <li class="list-group-item">

                                    <div class="row px-4">

                                        <div class="col-xl-4"><p><small class="text-muted">Valid till</small></p></div>
                                        <div class="col-xl-6"><h5>Jan 21 - Feb 21</h5></div>
                                    
                                    </div>

                                </li>
                                {/* second li containing validity ends */}

                                {/* third li cointaining code starts */}
                                <li class="list-group-item">

                                    {/* row in third li starts */}
                                    <div class="row px-4">

                                        {/* col for form starts */}
                                        <div class="col-xl-6">

                                            <form>

                                                {/* discount code starts */}
                                                <div>

                                                    <label for="exampleInputcode" class="form-label"><p><small class="text-muted">Discount Code</small></p></label>
                                                    <input type="text" class="form-control" id="exampleInputcode" />
                                                
                                                </div>
                                                {/* discount code ends */}

                                            </form>

                                        </div>
                                        {/* col for form ends */}

                                        <div class="col-xl-2"></div>

                                        {/* col for apply button */}
                                        <div class="col-xl-2">

                                            <button type="button" class="btn btn-sm px-4 mt-5 navbtn">APPLY</button>
                                        
                                        </div>
                                        {/* col for apply button ends */}

                                    </div>
                                    {/* row in third li ends */}
                                
                                </li>
                                {/* third li containing code ends */}

                            </ul>    
                            {/* ul in plandetails ends */}

                        </div>
                        {/* plandetails second card in second col ends */}

                        {/* planpricing third card in second col starts */}
                        <div class="card mx-5 pb-4 planprice">

                            <h5 class="p-3">Order Summary</h5>

                            <table class="mx-5">

                                <tr>
                                    <td>Plan</td>
                                    <td>Silver</td>
                                </tr>

                                <tr>
                                    <td>No. of Month</td>
                                    <td>01</td>
                                </tr>

                                <tr>
                                    <td>Price</td>
                                    <td><i class="fa-solid fa-indian-rupee-sign"></i> &nbsp; 2000</td>
                                </tr>

                                <tr>
                                    <td>Tax</td>
                                    <td><i class="fa-solid fa-indian-rupee-sign"></i> &nbsp; 360</td>
                                </tr>

                                <tr>
                                    <td>Discount</td>
                                    <td><i class="fa-solid fa-indian-rupee-sign"></i> &nbsp; - 60</td>
                                </tr>

                            </table>

                            <hr class="mx-5 px-5" style={ hrstyle } / >

                            <table class="mb-4">

                                <tr>
                                    <td><b>Total</b></td>
                                    <td class="mx-5 total"><i class="fa-solid fa-indian-rupee-sign"></i> &nbsp; <b>2300</b></td>                               
                                </tr>

                            </table>

                            <a href="#" class="btn btn-sm mx-5 navbtn checkoutbtn"><i class="fa-solid fa-lock me-5"></i>Proceed to Checkout<i class="fa-solid fa-arrow-right mx-5"></i></a>
                        
                        </div>
                        {/* planpricing third card in second col starts */}

                    </div>
                    {/* main row col second ends */}

                </div>
                {/* main row ends */}

            </div>
            {/* checkout ends */}

        </div>
        {/* <!-- container fluid ends --> */}

        </>
    );
}

export default checkout;



