import { PaginationTable } from './OrderTable';

function Transition(){
    return(

        <div >
            <div className='transition-top'>
                <h2>Transition</h2>
                <div className='search-input'>
                    <input type="text" placeholder="Search...." />
                    <span class="material-icons-outlined"> search</span>
                    </div>
            </div>
        <PaginationTable />
        </div>

    );
}

export default Transition;