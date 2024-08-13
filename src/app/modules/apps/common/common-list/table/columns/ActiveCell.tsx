import { FC, useEffect } from "react";
import { MenuComponent } from "../../../../../../../_metronic/assets/ts/components";
import { useDispatch, useSelector } from "react-redux";
import { commonUserStatusSwtichCases } from "../../../../../../../utils/shared";


const ActiveCell: FC<any> = ({ user }) => {
  const sharedActions = useSelector((state: any) => state.sharedActions);
  const dispatch: any = useDispatch()

  useEffect(() => {
    MenuComponent.reinitialization();
  }, []);


  const changeStatusQuery = (e: any, _id: any) => {
    const checkedValue = e.target.checked;
    commonUserStatusSwtichCases(sharedActions.id, { _id, checkedValue }, dispatch)
  }


  return (
    <>
      <div className="d-flex align-items-center">
        <div className="menu-item menu-item-switch admin-status-switch">
          <input
            onChange={(e: any) => changeStatusQuery(e, user._id)}
            checked={user?.isActive}
            type="checkbox"
            id={user?._id}
          />
          <label htmlFor={user?._id}> </label>
        </div>
      </div>
    </>
  );
};

export { ActiveCell };
