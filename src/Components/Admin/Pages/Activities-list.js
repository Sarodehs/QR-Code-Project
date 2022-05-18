import React from 'react'

function ActivitiesList() {

  return (
    <div>
    <main>
      <section className='person-container'>

      <article  className='person'>
            <img src='https://instantglamour.com/wp-content/uploads/photo-gallery/IMG_2002-pp-b.jpg' alt='avtar' />
            <div> <h4>Pankaj › Kunal</h4>  <p>03, Oct 21, 10:25 AM;</p>      </div>
            <div >Call for plan exiry reminder</div>
      </article>     <hr/>
      <article  className='person'>
            <img src='https://instantglamour.com/wp-content/uploads/photo-gallery/thumb/IMG_3348-pp-b.jpg' alt='avtar' />
            <div> <h4>Rupesh › Krushna </h4>  <p>03, Oct 21, 10:25 AM;</p>      </div>
            <div >SMS for Setting update</div>
      </article>     <hr/>    
      <article  className='person'>
            <img src='https://instantglamour.com/wp-content/uploads/photo-gallery/Passport%20photo/thumb/pp-1.jpg' alt='avtar' />
            <div> <h4>Pankaj › Kunal</h4>  <p>03, Oct 21, 10:25 AM;</p>      </div>
            <div >Qr Code show invalid</div>
      </article>    <hr/>
      <article  className='person'>
            <img src='https://instantglamour.com/wp-content/uploads/photo-gallery/Passport%20photo/thumb/pp-1.jpg' alt='avtar' />
            <div> <h4>Pankaj › Kunal</h4>  <p>03, Oct 21, 10:25 AM;</p>      </div>
            <div >Qr Code show invalid</div>
      </article>    <hr/>
     
      </section>
    </main>
    

    <div className='row'>
      <div className='col-lg-4 col-md-12 col-sm-12 activity-bottom-btn d-flex m-3' >
     <p>Showing 4 | 10 Entries</p>
      </div>
      <div className='col-lg-6 col-md-12 col-sm-12 activity-bottom-btn d-flex m-3 justify-content-end' >
          <button>      {'<<'}    </button>{' '}
          <button>  Previous    </button>{' '}
          <button >      Next    </button>{' '}
          <button>      {'>>'}    </button>{' '}
      </div>
      </div>
    </div>
    
  )
}



export default ActivitiesList;

