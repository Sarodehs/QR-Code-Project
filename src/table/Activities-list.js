import React, { useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from './activiti-data.js'
import Avatar from "@material-ui/core/Avatar";
// import { COLUMNS } from "./tbl_column.js" 


// ########### development section below::
// Actual activity passing
export const ActivitiesList_new = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])
  var datalenght=(data.length);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  )

  const { pageIndex, pageSize } = state
    console.log(MOCK_DATA);
  return (
    <>
      <table {...getTableProps()}>
    
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            // console.log(row);
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>
                   
                    
                    {cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='btn-activity d-flex'>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>{' '}
      </div>
 
    </>
  )
}

// column formatt

export const COLUMNS = [
  {
    Header: 'name',
    Footer: 'name',
    accessor: 'name',
    sticky: 'left'
  },
  {
    Header: 'image',
    Footer: 'image',
    accessor: 'image',
    sticky: 'left'
  },
  {
    Header: 'time',
    Footer: 'time',
    accessor: 'time',
  },
  {
    Header: 'task',
    Footer: 'task',
    accessor: 'task',
    disableFilters: true,
    sticky: 'left'
  }
]


























































































































// Working static section below

function ActivitiesList() {
  const [people, setPeople] = useState(MOCK_DATA)
  return (
    <div>
    <main>
      <section className='person-container'>

      <article  className='person'>
            <img src='https://assets.webiconspng.com/uploads/2016/12/User-Icon-PNG.png' alt='avtar' />
            <div> <h4>Pankaj  Kunal</h4>  <p>03, Oct 21, 10:25 AM;</p>      </div>
            <div >Call for plan exiry reminder</div>
      </article>  
      <article  className='person'>
            <img src='https://assets.webiconspng.com/uploads/2016/12/User-Icon-PNG.png' alt='avtar' />
            <div> <h4>Pankaj  Kunal</h4>  <p>03, Oct 21, 10:25 AM;</p>      </div>
            <div >Call for plan exiry reminder</div>
      </article>      
      <article  className='person'>
            <img src='https://assets.webiconspng.com/uploads/2016/12/User-Icon-PNG.png' alt='avtar' />
            <div> <h4>Pankaj  Kunal</h4>  <p>03, Oct 21, 10:25 AM;</p>      </div>
            <div >Call for plan exiry reminder</div>
      </article>
     
      </section>
    </main>
    
    <div className='activity-bottom-btn d-flex m-3' style={{justifyContent: 'end'}}>

    <button>      {'<<'}    </button>{' '}
    <button>  Previous    </button>{' '}
    <button >      Next    </button>{' '}
    <button>      {'>>'}    </button>{' '}

    {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {'<<'}
    </button>{' '}
    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
      Previous
    </button>{' '}
    <button onClick={() => nextPage()} disabled={!canNextPage}>
      Next
    </button>{' '} */}
    </div>

    </div>
    
  )
}



export default ActivitiesList;










{/* <section .className='container'>
<article key={id} className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
</section> */}
