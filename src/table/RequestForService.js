import { PaginationTable } from './OrderTable';

function RequestForService(){
    return(

        <div className='rfs'>
        <h2>Request For Service</h2>  
            <div className='row  m-2' >
                <section className='col ticket-top-btn' >
                    <button><span class="material-icons-outlined">file_download</span><span>Export to CSV</span> </button>
                    <button><span class="material-icons-outlined">phone</span><span>Contact</span> </button>
                    <button><span class="material-icons-outlined">calendar_today</span><span>Schedule</span> </button> </section>
                <section className='col-4 search-input'>
                    <input type="text" placeholder="Search...." />
                    <span class="material-icons-outlined">search</span>
                </section>
            </div>

        <PaginationTable />
        </div>

    );
}

export default RequestForService;