import React from "react";

const paysuccess = () => {
    return(
        <>
        {/* <!-- container-fluid starts --> */}
        <div class="container-fluid">

            {/* paysuccess starts */}


            <div className="row text-center mt-5 pt-5">

             <div class="col-xl-4"></div>

                <div className="col-xl-4 mt-5 pt-5">

                    <div class="text-center">

                        <span class="material-icons-outlined greencolor fw-normal" style={{fontSize: '1000%'}} >check_circle</span>
                        <h2 class="mt-4 mb-4 greencolor">Awesome !</h2>
                        <p>Payment was Successful</p>

                    </div>

                </div>

             

            </div>


           
            {/* paysuccess ends */}

        </div>
        {/* <!-- container fluid ends --> */}
        </>
    );
}

export default paysuccess;





