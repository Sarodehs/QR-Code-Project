import { PaginationTable_TicketUpdate  } from './OrderTable';

function Ticket(){
    return(

        <div>
        <h2 >Ticket</h2>  
            <div className='row rfs' >              
                <div className='col ticket-top-btn' >
                    <button><span class="material-icons-outlined ">file_download</span>&nbsp; <span>Export to CSV</span></button>
                    <button><span class="material-icons-outlined">delete</span>&nbsp; <span>Delete</span> </button>
                    <button><span class="material-icons-outlined">reply</span>&nbsp; <span>Assign</span> </button>
                    <button><span class="material-icons-outlined">calendar_today</span> &nbsp; <span>Schedule</span></button>  </div>
                <div className='col-4 search-input m-3'>
                    <input type="text" placeholder="Search...." />
                    <span class="material-icons-outlined">search</span>
                </div>
            </div>
        <PaginationTable_TicketUpdate  />
        </div>

    );
}

export default Ticket;