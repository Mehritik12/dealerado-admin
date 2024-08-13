// @ts-nocheck
import { Column } from 'react-table'
import { TitleCell } from './TitleCell'
import { ImageCell } from './ImageCell'
import { UserCustomHeader } from './CustomHeader'
import { MappingCell } from './MappingCell'
import { ActionVerifyCell } from './ActionVerify'




const partnersColumns: ReadonlyArray<Column<any>> = [
  {

    Header: (props) => <UserCustomHeader tableProps={props} title='first name' className='min-w-50px' />,
    id: 'first name',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].firstName} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='last name' className='min-w-50px' />,
    id: 'last name',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].lastName} />,
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
    Header: (props) => <UserCustomHeader tableProps={props} title='image' className='min-75px' />,
    id: 'image',
    Cell: ({ ...props }) => <ImageCell userObj={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Specialities' className='min-75px' />,
    id: 'Specialities',
    Cell: ({ ...props }) => <MappingCell userObj={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Action' className='min-w-75px' />
    ),
    id: 'Action',
    Cell: ({ ...props }) => <ActionVerifyCell user={props.data[props.row.index]} />,
  },
]

export { partnersColumns }
