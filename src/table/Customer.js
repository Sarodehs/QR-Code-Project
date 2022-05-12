import { PaginationTable_ViewEmbede } from './OrderTable';

function CustomerMain(){
    return(

        <div >
            <div className='ticket-top'>
                <h2>Customer</h2>
               
                    <div className='table-bottom'><button > + Add Cusstomer</button></div>                    
                    <div  className='search-input' style={{margin: '30px'}}>
                        <input type="text" placeholder="Search...." />
                        <span class="material-icons-outlined">search</span></div> 
            </div>
        <PaginationTable_ViewEmbede />
        </div>

    );
}

function CustomerTicket(){
    return(<>
        <div style={{margin:'20px' }}>
            <p> Dashboard | Customer | View |ticket</p>
            <div >
                <h2>Ticket</h2>
                <p>Topic of concern</p>
                
                <div class="btn-group">
                    <button type="button" class="btn dropdown-toggle"  style={{background:'white'}}
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Right-aligned menu
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
                
            </div>  
        </div>  
    </>)
}


export {
    CustomerMain,
    CustomerTicket,
}