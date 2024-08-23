// @ts-nocheck
import { Column } from 'react-table'
import { TitleCell } from './TitleCell'
import { UserCustomHeader } from './CustomHeader'
import { ActionCell } from './ActionCell'
const adminColumns: ReadonlyArray<Column<User>> = [
  {

    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-50px' />,
    id: 'name',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].name} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='email' className='min-w-50px' />
    ),
    id: 'email',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].email} />,
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

export { adminColumns }
