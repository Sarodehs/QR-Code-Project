import {CustomerDetailsCard, HotelOwner,PlanCard } from "./CustomerDetailComponents";
import AdminSidebar from  "../Navigation/AdminSidebar";
import AdminHeader from "../Navigation/AdminHeader";



function CustomerDetails () {
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
              
                    <h2>Customer Details</h2> 
                    <p>Dashboard |  Customer | View</p>

                    <div className='row'>
                        <div className="col-6 person"> 
                            <CustomerDetailsCard />    
                        </div>            
                        <div className='col-6 btn-activity'>
                            <HotelOwner />
                            <PlanCard />  
                            <div className="table-bottom  justify-content-evenly" >
                                <button style={{width:'auto'}}> Unblock</button>   
                                <button style={{width:'auto'}}> Block</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>

    );
}

export default CustomerDetails;