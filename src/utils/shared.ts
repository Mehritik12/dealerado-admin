import "./style.scss";
import { Slide, toast } from "react-toastify";
import Swal from "sweetalert2";
import { getCategory } from "../redux/features/category/_categoryAction";
import { getUsers } from "../redux/features/user/_userAction";
import { TYPE } from "./const";

export const commonSwtichCases = (id: any, searchValue: any, dispatch: any) => {
    switch (id) {
        case TYPE.CATEGORY:
            dispatch(getCategory({ search: searchValue}))
            break;
        case TYPE.USER:
            dispatch(getUsers({ search: searchValue,role:'user'}))
            break;
            case TYPE.WALLET:
                dispatch(getUsers({ search: searchValue,role:'user'}))
                break;
        default:
    }
}

export const conFirmMessage = (values) => {
    return Swal.fire(values)
}


export const toastifyOptions: any = {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
};

export const notify = (message: any, type: any) => {
    if (type === 'error') {
        return toast.error(message, toastifyOptions);
    } else if (type === 'info') {
        return toast.info(message, toastifyOptions);
    } else if (type === 'warning') {
        return toast.warning(message, toastifyOptions);
    } else if (type === 'success') {
        return toast.success(message, toastifyOptions);
    }
};


