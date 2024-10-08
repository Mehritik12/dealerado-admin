import { useDispatch, useSelector } from 'react-redux';
import { KTIcon } from '../../../../../../../_metronic/helpers'
import { setAddMoneyModalStatus, setBannerModalStatus, setServiceModalStatus, setFormDetails, setOrderModalStatus, setUserModalStatus, setVehicleModalStatus, setSubServiceModalStatus } from '../../../../../../../redux/features/shared/sharedSlice';
import { setAdminModalStatus } from '../../../../../../../redux/features/shared/sharedSlice';
import { TYPE } from '../../../../../../../utils/const';

const CommonToolbar = () => {
  const sharedActions = useSelector((state: any) => state.sharedActions);
  const dispatch = useDispatch();
  const openAddUserModal = () => {
    switch (sharedActions.id) {
      case TYPE.SERVICE:
        dispatch(setServiceModalStatus(true))
        break;
      case TYPE.BANNER:
        dispatch(setBannerModalStatus(true))
        break;
      case TYPE.USER:
        dispatch(setUserModalStatus(true))
        dispatch(setFormDetails({}))
        break;
      case TYPE.ORDER:
        dispatch(setOrderModalStatus(true))
        break;
      case TYPE.VEHICLE:
        dispatch(setVehicleModalStatus(true))
        break;
      default:
        break;
      case TYPE.ADMIN:
        dispatch(setAdminModalStatus(true))
        break;
      case TYPE.TRANSACTION:
        dispatch(setAddMoneyModalStatus(true))
        break;
        case TYPE.SUBSERVICE:
        dispatch(setFormDetails({}))
        dispatch(setSubServiceModalStatus(true))
        break;
    }
  }

  return (
    <>
      {(sharedActions.id === TYPE.CATEGORY
        || sharedActions.id === TYPE.BANNER
        || sharedActions.id === TYPE.USER
        || (sharedActions.id === TYPE.ADMIN)
        || sharedActions.id === TYPE.ORDER
        || sharedActions.id === TYPE.TRANSACTION
        || sharedActions.id === TYPE.SERVICE
        || sharedActions.id === TYPE.SUBSERVICE
      ) && <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
          <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
            <KTIcon iconName='plus' className='fs-2' />
            {`Add ${sharedActions.id}`}
          </button>
        </div>}
    </>
  )
}

export { CommonToolbar }
