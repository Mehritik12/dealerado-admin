import { FC, useEffect } from "react";
import { MenuComponent } from "../../../../../../../_metronic/assets/ts/components";
import { useDispatch, useSelector } from "react-redux";
import PermissionIcon from "../../../../../../icons/PermissionIcon";
import { setFormDetails, setPermissionModalStatus } from "../../../../../../../redux/features/shared/sharedSlice";


const PermissionCell: FC<any> = ({ user }) => {
  const sharedActions = useSelector((state: any) => state.sharedActions);
  const dispatch: any = useDispatch()


  const openPermission = () => {
    dispatch(setPermissionModalStatus(true));
    dispatch(setFormDetails(user))
  }


  return (
    <>
      <div className="d-flex align-items-center">
        <div className="menu-item">
          <span className='cursor-pointer' onClick={openPermission}><PermissionIcon /></span>
        </div>
      </div>
    </>
  );
};

export { PermissionCell };
