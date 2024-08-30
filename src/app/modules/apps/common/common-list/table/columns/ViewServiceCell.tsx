/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFormDetails, setId } from "../../../../../../../redux/features/shared/sharedSlice";
import walletIcon from "../../../../../../../_metronic/assets/images/wallet.png";
import { TYPE } from "../../../../../../../utils/const";

const ViewServiceCell: FC<any> = ({ userObj }) => {
  const dispatch :any= useDispatch()
  return (
    <>
      <div className="d-flex align-items-center walletWrap">
        <div className="menu-item">
          <Link className="btn btn-sm" to={`/service/subService/${userObj._id}`}
            // type="button"
            // className={`btn btn-primary btn-sm`}
            // data-kt-users-table-filter="delete_row"
            onClick={() => { dispatch(setFormDetails(userObj));dispatch(setId(TYPE.SUBSERVICE)) }}
          >
            View
            {/* <img src={walletIcon} alt="walletIcon" /> */}
            
          </Link>
        </div>
      </div>

    </>
  );
};

export  {ViewServiceCell};