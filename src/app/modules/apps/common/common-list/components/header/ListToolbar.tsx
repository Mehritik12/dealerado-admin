import { useDispatch, useSelector } from 'react-redux';
import { KTIcon } from '../../../../../../../_metronic/helpers'
import { setAdminModalStatus, setBannerModalStatus, setCategoryModalStatus, setUserModalStatus } from '../../../../../../../redux/features/shared/sharedSlice';
import { TYPE } from '../../../../../../../utils/const';

const UsersListToolbar = () => {
  const sharedActions = useSelector((state: any) => state.sharedActions);
  const dispatch = useDispatch();
  const openAddUserModal = () => {
    switch (sharedActions.id) {
      case TYPE.CATEGORY:
        dispatch(setCategoryModalStatus(true))
        break;
      case TYPE.BANNER:
        dispatch(setBannerModalStatus(true))
        break;
      case TYPE.USER:
        dispatch(setUserModalStatus(true))
        break;
        case TYPE.ADMIN:
          dispatch(setAdminModalStatus(true))
        break;

      default:
    }
  }

  return (
    <>
      {(sharedActions.id === TYPE.CATEGORY
        || sharedActions.id === TYPE.BANNER
        || sharedActions.id === TYPE.USER
        || sharedActions.id === TYPE.ADMIN
      ) && <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
          <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
            <KTIcon iconName='plus' className='fs-2' />
            Add {sharedActions.id}
          </button>
        </div>}
    </>
  )
}

export { UsersListToolbar }
