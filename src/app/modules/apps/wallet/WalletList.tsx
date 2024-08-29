import { CommonHeader } from "../common/common-list/components/header/ListHeader";
import { CommonTable } from "../common/common-list/table/Table";
import { KTCard } from "../../../../_metronic/helpers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../common/common-list/components/pagination/Pagination";
import { setId } from "../../../../redux/features/shared/sharedSlice";
import {  getUsers } from "../../../../redux/features/user/_userAction";
import { TYPE } from "../../../../utils/const";
import { walletColumns } from "../common/common-list/table/columns/_walletColumns";
import { TransactionModal } from "./transactions/TransactionModal";
import { getAllUserBalance } from "../../../../redux/features/transaction/_transactionAction";
const role = 'user';
const UserList = () => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any) => state.userList?.data);
  const totalRecord = useSelector((state: any) => state.userList?.totalRecord);
  const sharedActions = useSelector((state: any) => state.sharedActions);
  const allUserBalance = useSelector((state: any) => state.transactions?.allUserBalance?.balance)


  useEffect(() => {
    dispatch(setId(TYPE.WALLET))
    dispatch(getAllUserBalance({}))
    dispatch(getUsers({ page: 1, limit: 10, role: role }));
  }, []);

  const handleClick = (page: number) => {
    dispatch(getUsers({ page: page, limit: 10, role: role }));
  };

  return (
    <>
      <KTCard>
        <div className="blockWrapper">
          <div className="row">
            <div className="col-lg-3 col-md-4 mb-3">
              <div className="blockAmount">
                <p>Balance</p>
                <label>₹ {allUserBalance?allUserBalance:0}</label>
              </div>
            </div>
            {/* <div className="col-sm-4 mb-3">
            <div className="blockAmount">
                <p>Balance</p>
                <label>$500</label>
              </div>
            </div> */}
            {/* <div className="col-sm-4 mb-3">
            <div className="blockAmount">
                <label>$500</label>
              </div>
            </div> */}

            <div className="col-lg-9 col-md-8 mb-3">
              <CommonHeader />
            </div>
          </div>
        </div>
        <CommonTable data={data} columns={walletColumns} />
        {sharedActions.addMoneyModal && <TransactionModal />}
        {totalRecord > 10 && (
          <Pagination totalRecord={totalRecord} handleClick={handleClick} />
        )}
      </KTCard>
    </>
  );
};

export { UserList };
