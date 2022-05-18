

import AdminSidebar from  "../Navigation/AdminSidebar";
import AdminHeader from "../Navigation/AdminHeader";
// import Footer from "../Navbar/Footer";
import { PaginationTableCustomerViewEmbeded } from './TblOperation/OrderTable';

function AdminCustomerData(){
 
    return(
        
        <>
        <div className="container-fluid  ">
        <AdminHeader />
            <div className="row">
                 {/* <!-- side nav start --> */}
                <div className="col-md-2 col-xl-2 col-sm-2" >
                   <AdminSidebar />
                </div>
                {/* <!-- side nav end --> */}

                {/* <!-- Content area start --> */}
                <div className=" col-md-10 col-xl-10 col-sm-10 bg-light  justify-content-center p-4" >
                    {/* search and header section */}
                <div class="row">
                    <div class="col-xl-8 col-md-6 col-sm-6"><h3>Customer</h3></div>
                   
                    <div class="col-xl-3 col-md-6 col-sm-6">
                    <div class="input-group mb-3 searchbar">
                                                    <input type="text" class="form-control inputfocus" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <span class="input-group-text"><span class="material-icons-outlined">search</span></span>
                                                </div>
                    </div>
                </div>


                    {/* <h2>Customer</h2><button>+ ADD CUSTOMER</button> */}
                    <PaginationTableCustomerViewEmbeded />
                </div>
            </div>
            </div>
        </>
    )
}

export default AdminCustomerData;