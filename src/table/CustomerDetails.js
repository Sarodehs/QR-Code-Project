import {CustomerDetailsCard, HotelOwner,PlanCard } from "./CustomerDetailComponents";


function CustomerDetails () {
    return(
        <div >
        <p>Dashboard |  Customer | View</p>
        <h2>Customer Details</h2> 

        <div className='row'>
            <div className="col-6 person"> 
                <CustomerDetailsCard />    
            </div>            
                <div className='col-6 btn-activity'>
                    <HotelOwner />
                    <PlanCard />  
                    <div className="table-bottom  justify-content-evenly" >
                        <button style={{width:'auto'}}> Block</button>
                        <button style={{width:'auto'}}> Unblock</button>   
                    </div>
                </div>
        </div>

      
        </div>


    );
}

export default CustomerDetails;