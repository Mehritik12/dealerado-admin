import { useDispatch, useSelector } from 'react-redux';
import { KTIcon } from '../../../../../../../_metronic/helpers'
import { setBannerModalStatus, setCategoryModalStatus, setModalStatus } from '../../../../../../../redux/features/shared/sharedSlice';

const UsersListToolbar = () => {
  const sharedActions = useSelector((state: any) => state.sharedActions);
  const dispatch = useDispatch();
  const openAddUserModal = () => {

    switch (sharedActions.id) {
      case 'Speciality':
        dispatch(setModalStatus(true))
        break;
      case 'Category':
        dispatch(setCategoryModalStatus(true))
        break;
      case 'Banner':
        dispatch(setBannerModalStatus(true))
        break;
        

      default:

    }
  }

  return (
    <>
      {(sharedActions.id === "Speciality"
        || sharedActions.id === "Category" || sharedActions.id === "Banner"
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
