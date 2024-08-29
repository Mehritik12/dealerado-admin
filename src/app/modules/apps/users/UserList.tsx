import { CommonHeader } from "../common/common-list/components/header/ListHeader";
import { CommonTable } from "../common/common-list/table/Table";
import { KTCard } from "../../../../_metronic/helpers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../common/common-list/components/pagination/Pagination";
import { setId } from "../../../../redux/features/shared/sharedSlice";
import { UserModal } from "./UserModal";
import { getUsers } from "../../../../redux/features/user/_userAction";
import { usersColumns } from "../common/common-list/table/columns/_userColumns";
import { TYPE } from "../../../../utils/const";
const role = 'user';
const UserList = () => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any) => state.userList?.data);
  const { totalRecord } = useSelector((state: any) => state.userList);
  const sharedActions = useSelector((state: any) => state.sharedActions);

  useEffect(() => {
    dispatch(setId(TYPE.USER))
    dispatch(getUsers({ page: 1, limit: 10,role:role }));
  }, [dispatch]);

  const handleClick = (page: number) => {
    dispatch(getUsers({ page: page, limit: 10 ,role:role}));
  };

  return (
    <>
      <KTCard>
        <CommonHeader />
        <CommonTable data={data} columns={usersColumns} />
        {sharedActions.userModal && <UserModal/>}
        {totalRecord > 10 && (
          <Pagination totalRecord={totalRecord} handleClick={handleClick} />
        )}
      </KTCard>
    </>
  );
};

export { UserList };
