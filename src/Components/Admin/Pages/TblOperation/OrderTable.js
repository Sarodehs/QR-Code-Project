import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from './data.json'
import { NavLink } from 'react-router-dom'


const COLUMNS = [
  {
    Header: 'OrderId',
    Footer: 'OrderId',
    accessor: 'OrderId',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'Name',
    sticky: 'left'
  },
  {
    Header: 'Plan',
    Footer: 'Plan',
    accessor: 'Plan',
    sticky: 'left'
  },
  {
    Header: 'Method',
    Footer: 'Method',
    accessor: 'Method',
  },
  {
    Header: 'RestaurantName',
    Footer: 'RestaurantName',
    accessor: 'RestaurantName',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'BillStatus',
    Footer: 'BillStatus',
    accessor: 'BillStatus',
    sticky: 'left'
  },
  {
    Header: 'TransationId',
    Footer: 'TransationId',
    accessor: 'TransationId',
    sticky: 'left'
  },
  {
    Header: 'OrderUpdatedOn',
    Footer: 'OrderUpdatedOn',
    accessor: 'OrderUpdatedOn',
  }
]



export const PaginationTable = () => {
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

    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  )

  const { pageIndex} = state
    // console.log(MOCK_DATA);
  return (
    <>
    <div className='overflow-auto'>
      <table {...getTableProps()} className='tbl-width' >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr style={{backgroundColor:'#B5876D', color:'white'}} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            // console.log(row);
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                {/* <td>View</td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
      <div className='table-bottom'>
        <p>
            showing 10 | {datalenght} entries
        </p>
          <div className='table-bottom m-0'>
            <div className='d-flex'>
              <button className='m-2' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </button>{' '}
              <button className='m-2'  onClick={() => previousPage()} disabled={!canPreviousPage}>
                Previous
              </button>{' '}
              <button className='m-2'  onClick={() => nextPage()} disabled={!canNextPage}>
                Next
              </button>{' '}
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
              </button>{' '}
            </div>
          <span className=''>
              | Go to page:{' '}
              <input
                type='number'
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(pageNumber)
                }}
                style={{ width: '100px' }}
              />
          </span>{' '}
                 
          </div>
      </div>

      <span style={{float:'right',color:'gray'}}>Page{' '}             
          <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span> 
    </>
  )
}

export const PaginationTableCustomerViewEmbeded = () => {
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

    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  )

  const { pageIndex} = state
    // console.log(MOCK_DATA);
  return (
    <>
    <div className='overflow-auto'>
      <table {...getTableProps()} className='tbl-width' >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr  style={{backgroundColor:'#B5876D', color:'white'}}  {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            // console.log(row);
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                {/* <td>View</td> */}
                <td ><NavLink to='/customer-details' style={{color:'#FF7000',textDecoration:'none'}} >View</NavLink> </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
      <div className='table-bottom'>
        <p>
            showing 10 | {datalenght} entries
        </p>
          <div className='table-bottom m-0'>
            <div className='d-flex'>
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
          <span className=''>
              | Go to page:{' '}
              <input
                type='number'
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(pageNumber)
                }}
                style={{ width: '100px' }}
              />
          </span>{' '}
                 
          </div>
      </div>

      <span style={{float:'right',color:'gray'}}>Page{' '}             
          <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span> 
    </>
  )
}

export const PaginationTableTicketUpdate = () => {
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
  
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  )

  const { pageIndex} = state
    // console.log(MOCK_DATA);
  return (
    <>
    <div className='overflow-auto'>
      <table {...getTableProps()} className='tbl-width' >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr  style={{backgroundColor:'#B5876D', color:'white'}}  {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th> </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            // console.log(row);
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                {/* <td>View</td> */}
                
                 <td >
                 <div class="btn-group">
                     <button class="btn bg-white border btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Pending ⮟
                     </button>
                     <div class="dropdown-menu">
                       <NavLink class="dropdown-item" href="/#">In Progress</NavLink>
                       <NavLink class="dropdown-item" href="/#">Resolve</NavLink>
                     </div>
                   </div>
                 </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
      <div className='table-bottom'>
        <p>
            showing 10 | {datalenght} entries
        </p>
          <div className='table-bottom m-0'>
            <div className='d-flex'>
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
          <span className=''>
              | Go to page:{' '}
              <input
                type='number'
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(pageNumber)
                }}
                style={{ width: '100px' }}
              />
          </span>{' '}
                 
          </div>
      </div>

      <span style={{float:'right',color:'gray'}}>Page{' '}             
          <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span> 
    </>
  )
}



export const PaginationTableTicketViewEmbeded = () => {
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
 
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  )

  const { pageIndex} = state
    // console.log(MOCK_DATA);
  return (
    <>
    <div className='overflow-auto'>
      <table {...getTableProps()} className='tbl-width' >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr  style={{backgroundColor:'#B5876D', color:'white'}}  {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            // console.log(row);
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                {/* <td>View</td> */}
                <td ><NavLink to='/ticket-edit' style={{color:'#FF7000',textDecoration:'none'}} >View</NavLink> </td>
               
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
      <div className='table-bottom'>
        <p>
            showing 10 | {datalenght} entries
        </p>
          <div className='table-bottom m-0'>
            <div className='d-flex'>
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
          <span className=''>
              | Go to page:{' '}
              <input
                type='number'
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(pageNumber)
                }}
                style={{ width: '100px' }}
              />
          </span>{' '}
                 
          </div>
      </div>

      <span style={{float:'right',color:'gray'}}>Page{' '}             
          <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span> 
    </>
  )
}


