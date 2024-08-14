// @ts-nocheck
import { Column } from 'react-table'
import { TitleCell } from './TitleCell'
import { ImageCell } from './ImageCell'
import { ActiveCell } from './ActiveCell'
import { UserCustomHeader } from './CustomHeader'
const usersColumns: ReadonlyArray<Column<User>> = [
  {

    Header: (props) => <UserCustomHeader tableProps={props} title='first name' className='min-w-50px' />,
    id: 'first name',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].firstName} />,
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
      <UserCustomHeader tableProps={props} title='role' className='min-w-50px' />
    ),
    id: 'role',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].role} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='image' className='min-75px' />,
    id: 'profilePicture',
    Cell: ({ ...props }) => <ImageCell userObj={props.data[props.row.index].profilePicture} />,
  },
  {
    Header: (props) => (  
      <UserCustomHeader tableProps={props} title='Active' className='min-w-75px' />
    ),
    id: 'isActive',
    Cell: ({ ...props }) => <ActiveCell user={props.data[props.row.index]} />,
  },
]

export { usersColumns }
