// @ts-nocheck
import { Column } from 'react-table'
import { TitleCell } from './TitleCell'
import { UserCustomHeader } from './CustomHeader'
import moment from 'moment'
import { capitalizeFirstLetter } from '../../../../../../../utils/const'

const transactionsColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-50px' />,
    id: 'name',
    Cell: ({ ...props }) => <TitleCell userObj={capitalizeFirstLetter(props.data[props.row.index].user.name)} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='amount' className='min-w-50px' />
    ),
    id: 'amount',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].amount} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='type' className='min-w-50px' />
    ),
    id: 'type',
    Cell: ({ ...props }) => <TitleCell userObj={props.data[props.row.index].type} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='created at' className='min-w-50px' />
    ),
    id: 'createdat',
    Cell: ({ ...props }) => <TitleCell userObj={moment(props.data[props.row.index].createdAt).format('DD/MM/YYYY')} />,
  },
  {
    Header: (props) => (  
      <UserCustomHeader tableProps={props} title='createdby' className='min-w-75px' />
    ),
    id: 'createdby',
    Cell: ({ ...props }) => <TitleCell userObj={`${props.data[props.row.index].createdBy.email}`} />,
  },
]

export { transactionsColumns }
