

import AdminSidebar from  "../Navigation/AdminSidebar";
import AdminHeader from "../Navigation/AdminHeader";
// import Footer from "../Navbar/Footer";
import {PaginationTable} from './TblOperation/OrderTable'

function AdminTransactionsData(){
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
                    
                    <h2>Transaction</h2>
                    <PaginationTable />
                </div>
            </div>
            </div>
        </>
    )
}

export default AdminTransactionsData;