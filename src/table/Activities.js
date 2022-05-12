import ActivitiesList from './Activities-list';
// import './Activiti-list.css'

function Activities () {
    return(
        <div style={{margin:'20px'}}>
        <p>Dashboard |  Activities</p>

        <div className='row'>
        <div className="col-8"> 
        <h2>Activities</h2> 
        <ActivitiesList />     
        
        </div>            
        <div className='col-4 btn-activity'>
            <h1>Filter</h1>
            <button> Specific</button>
            <button> Today</button>
            <button> Yesterday</button>
            <button> This Week</button>
            <button> This Month</button>
            <br/><hr/><br/>
            <button><span class="material-icons-outlined">file_download</span> Export to CSV</button>
            <br/><hr/><br/>
        </div>

        </div></div>


    );
}

export default Activities;