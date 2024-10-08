/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import {
  setAdminModalStatus,
  setBannerModalStatus,
  setServiceModalStatus,
  setFormDetails,
  setUserModalStatus,
  setSubServiceModalStatus,
} from "../../../../../../../redux/features/shared/sharedSlice";
import { useDispatch, useSelector } from "react-redux";
import { conFirmMessage } from "../../../../../../../utils/shared";
import {
  deleteCategory,
  getCategory,
} from "../../../../../../../redux/features/category/_categoryAction";
import { Dropdown } from "react-bootstrap";
import ThreeDotsIcon from "../../../../../../../_metronic/assets/logo/ThreeDotsIcon";
import { Link, useParams } from "react-router-dom";
import { deleteBanner, getBanner } from "../../../../../../../redux/features/banner/_bannerAction";
import { deleteUser } from "../../../../../../../redux/features/user/_userAction";
import { TYPE } from "../../../../../../../utils/const";
import { deleteService } from "../../../../../../../redux/features/service/_serviceAction";

type Props = {
  user: any;
};

const ActionCell: FC<Props> = ({ user }) => {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const sharedActions = useSelector((state: any) => state.sharedActions);

  const openEditModal = () => {
    dispatch(setFormDetails(user));
    switch (sharedActions.id) {
      case TYPE.SERVICE:
        dispatch(setServiceModalStatus(true));
        break;
      case TYPE.BANNER:
        dispatch(setBannerModalStatus(true));
        break;
      case TYPE.USER:
        dispatch(setUserModalStatus(true));
        break;
        case TYPE.ADMIN:
          dispatch(setAdminModalStatus(true));
          break;   
          case TYPE.SUBSERVICE:
            dispatch(setSubServiceModalStatus(true))
            break;
      default:
    }
  };

  const handleDelete = (itemId) => {
    const values = {
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    };
    conFirmMessage(values).then((result) => {
      if (result.isConfirmed) {
        if (sharedActions.id === TYPE.CATEGORY) {
          dispatch(deleteCategory({ id: itemId }));
        } 
        else if (sharedActions.id === TYPE.BANNER) {
          dispatch(deleteBanner({ id: itemId }));
        }
        else if (sharedActions.id === TYPE.USER) {
          dispatch(deleteUser({ id: itemId }));
        }
        else if (sharedActions.id === TYPE.SERVICE) {
          dispatch(deleteService({ _id: itemId,type:'service' }));
        }
        else if (sharedActions.id === TYPE.SUBSERVICE) {
          dispatch(deleteService({ _id: itemId,type:'subService',parentId:id }));
        }
        else if (sharedActions.id === TYPE.BANNER) {
          dispatch(deleteBanner({ _id: itemId}));
        }
      }
    });
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <div className="menu-item me-4">
          <Dropdown className="verifiedOptions">
            <Dropdown.Toggle variant="default" id="dropdown-basic">
              <ThreeDotsIcon />
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Link
                to={"#"}
                className="menu-link px-3 btn  btn-active-light-primary btn-sm"
                onClick={openEditModal}
              >
                Edit
              </Link>
              <Link
                to={"#"}
                className="menu-link px-3 btn  btn-active-light-primary btn-sm"
                data-kt-users-table-filter="delete_row"
                onClick={async () => await handleDelete(user._id)}
              >
                Delete
              </Link>
            </Dropdown.Menu>
          </Dropdown>

          {/* <a
            className="menu-link px-3 btn btn-secondary btn-active-light-primary btn-sm"
            onClick={openEditModal}
          >
            Edit
          </a> */}
          {/* </div> */}
          {/* <div className="menu-item">
          <a
            className="menu-link px-3 btn btn-danger btn-active-light-primary btn-sm"
            data-kt-users-table-filter="delete_row"
            onClick={async () => await handleDelete(user._id)}
          >
            Delete
          </a>
        </div> */}
        </div>
      </div>
    </>
  );
};

export { ActionCell };
