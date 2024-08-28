// @ts-nocheck
import { Column } from 'react-table'
import { TitleCell } from './TitleCell'
import { ImageCell } from './ImageCell'
import { ActiveCell } from './ActiveCell'
import { UserCustomHeader } from './CustomHeader'
import { ActionCell } from './ActionCell'
import TransferMoneyCell from './TransferMoney'

const walletColumns: ReadonlyArray<Column<User>> = [
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
      <UserCustomHeader tableProps={props} title='wallet' className='min-w-50px' />
    ),
    id: 'wallet',
    Cell: ({ ...props }) => <TransferMoneyCell userObj={props.data[props.row.index]} />,
  },
]

export { walletColumns }
