/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFormDetails } from "../../../../../../../redux/features/shared/sharedSlice";

const TransferMoneyCell: FC<any> = ({ userObj }) => {
  const dispatch :any= useDispatch()
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="menu-item">
          <Link className="btn btn-primary btn-sm" to={`/users/transactions/${userObj._id}`}
            // type="button"
            // className={`btn btn-primary btn-sm`}
            // data-kt-users-table-filter="delete_row"
            onClick={() => { dispatch(setFormDetails(userObj)) }}
          >
            Add Money
          </Link>
        </div>
      </div>

    </>
  );
};

export default TransferMoneyCell;