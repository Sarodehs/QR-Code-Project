import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from './tbl_data.json'
import { COLUMNS } from "./tbl_column.js" 
import TicketEdit from './TicketEdit'
import { NavLink } from 'react-router-dom'

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
    // console.log(MOCK_DATA);
  return (
    <>
    <div className='overflow-auto'>
      <table {...getTableProps()} className='tbl-width' >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
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

export const PaginationTable_ViewEmbede = () => {
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
    // console.log(MOCK_DATA);
  return (
    <>
    <div className='overflow-auto'>
      <table {...getTableProps()} className='tbl-width' >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
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
                <td ><NavLink to='/customer-details' style={{color:'#FF7000'}} >View</NavLink> </td>
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

export const PaginationTable_TicketUpdate = () => {
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
    // console.log(MOCK_DATA);
  return (
    <>
    <div className='overflow-auto'>
      <table {...getTableProps()} className='tbl-width' >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
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
                       <a class="dropdown-item" href="#">In Progress</a>
                       <a class="dropdown-item" href="#">Resolve</a>
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



