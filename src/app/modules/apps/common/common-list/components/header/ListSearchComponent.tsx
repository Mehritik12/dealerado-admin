/* eslint-disable react-hooks/exhaustive-deps */
import { KTIcon } from '../../../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux';
import { commonSwtichCases } from '../../../../../../../utils/shared';
import { TYPE } from '../../../../../../../utils/const';

const CommonSearchComponent = () => {
  const sharedActions = useSelector((state: any) => state.sharedActions);
  const dispatch = useDispatch();
  const searchQuery = (searchValue: string) => {
    commonSwtichCases(sharedActions.id, searchValue, dispatch)
  }



  return (
    <>
      {(sharedActions.id === TYPE.CATEGORY
        || sharedActions.id === TYPE.BANNER
        || sharedActions.id === TYPE.USER
        || (sharedActions.id === TYPE.ADMIN)
        || sharedActions.id === TYPE.ORDER
      ) && <div className='card-title'>
          <div className='d-flex align-items-center position-relative my-1'>
            <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
            <input
              type='text'
              data-kt-user-table-filter='search'
              className='form-control form-control-solid w-200px ps-14'
              placeholder='Search...'
              onChange={(e) => searchQuery(e.target.value)}
            />
          </div>
        </div>}
    </>
  )
}

export { CommonSearchComponent }
