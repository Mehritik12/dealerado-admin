// @ts-nocheck
import { Column } from 'react-table'
import { TitleCell } from './TitleCell'
import { ImageCell } from './ImageCell'
import { ActiveCell } from './ActiveCell'
import { UserCustomHeader } from './CustomHeader'
import { ActionCell } from './ActionCell'
import TransferMoneyCell from './TransferMoney'

const usersColumns: ReadonlyArray<Column<User>> = [
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='image' className='min-75px' />,
  //   id: 'profilePicture',
  //   Cell: ({ ...props }) => <ImageCell userObj={props.data[props.row.index].profilePicture} />,
  // },
  {

    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-50px' />,
    id: 'name',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].name} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='mobile number' className='min-w-50px' />
    ),
    id: 'mobile number',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].mobileNumber} />,
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
      <UserCustomHeader tableProps={props} title='Status' className='min-w-75px' />
    ),
    id: 'status',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].isKyc ?"Active":"Inactive"} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='wallet' className='min-w-50px' />
    ),
    id: 'wallet',
    Cell: ({ ...props }) => <TransferMoneyCell userObj={props.data[props.row.index]} />,
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

export { usersColumns }
