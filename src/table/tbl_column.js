import { format } from 'date-fns'

export const COLUMNS = [
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

