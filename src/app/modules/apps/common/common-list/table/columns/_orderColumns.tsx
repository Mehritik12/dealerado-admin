// @ts-nocheck
import { Column } from 'react-table'
import { TitleCell } from './TitleCell'
import { ImageCell } from './ImageCell'
import { ActiveCell } from './ActiveCell'
import { UserCustomHeader } from './CustomHeader'
import { ActionCell } from './ActionCell'
const ordersColumns: ReadonlyArray<Column<User>> = [
  {

    Header: (props) => <UserCustomHeader tableProps={props} title='Order ID' className='min-w-50px' />,
    id: 'orderId',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].orderId} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Service Type' className='min-w-50px' />
    ),
    id: 'serviceType',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].serviceType} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Status' className='min-w-50px' />
    ),
    id: 'status',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].status} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Date' className='min-w-50px' />
    ),
    id: 'date',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].date} />,
  },
  {
    Header: (props) => (
    <UserCustomHeader tableProps={props} title="Action" className=" min-w-100px"/>),
    id: "action",
    Cell: ({ ...props }) => (
      <ActionCell user={props.data[props.row.index]} />
    ),
  },
]

export { ordersColumns }
