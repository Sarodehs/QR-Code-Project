function TicketEdit(){
    return (
        <>
        <div class="shadow-lg p-3 mb-5 bg-white rounded ticket-edit">
            <h3><span class="material-icons-outlined">arrow_back</span> Ticket</h3><br/>

            <div className="row">
                <div className="col-4">
                    Customer Name
                </div>
                <div className="col-8">
                    <input type='text' />
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    Restaurant Name
                </div>
                <div className="col-8">
                    <input type='text' />
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                   Created Date
                </div>
                <div className="col-8">
                    <input type='text' />
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                   Reason
                </div>
                <div className="col-8">
                    <input type='text' />
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    Issue
                </div>
                <div className="col-8">
                    <textarea type='text' />
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                   Status
                </div>
                <div className="col-8">
                    <input type='text' />
                </div>
            </div>

            <div className="row">
                <div className="col-4"></div>
                <div className="col-8 d-flex">
                    <button className="w-auto">Save Changes</button>
                    <button className="w-auto">Cancel</button>
                </div>
            </div>



        </div>
        </>
    )
}

export default TicketEdit;