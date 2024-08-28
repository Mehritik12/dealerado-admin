import { CommonHeader } from "../../common/common-list/components/header/ListHeader";
import { CommonTable } from "../../common/common-list/table/Table";
import { KTCard } from "../../../../../_metronic/helpers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../common/common-list/components/pagination/Pagination";
import { setId } from "../../../../../redux/features/shared/sharedSlice";
import { TYPE } from "../../../../../utils/const";
import { transactionsColumns } from "../../common/common-list/table/columns/_transactionColumns";
import { TransactionModal } from "./TransactionModal";
import { getTransactions } from "../../../../../redux/features/transaction/_transactionAction";
import { getUserBalance } from "../../../../../redux/features/transaction/_transactionAction";
const TransactionList = () => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any) => state.transactions?.data) || [];
  const totalRecord :number= useSelector((state: any) => state.transactions?.totalRecord) || 0;
  const sharedActions = useSelector((state: any) => state.sharedActions);
  const userBalance = useSelector((state:any)=>state.transactions?.userBalace?.wallet) || 0

  useEffect(() => {
    dispatch(setId(TYPE.TRANSACTION))
    if (sharedActions.formDetails._id) {
      dispatch(getTransactions({ userId: sharedActions.formDetails._id, page: 1, limit: 10 }));
      dispatch(getUserBalance({userId:sharedActions.formDetails._id}))
    }
  }, []);

  const handleClick = (page: number) => {
    dispatch(getTransactions({ userId: sharedActions.formDetails._id, page: page, limit: 10 }));
  };

  return (
    <>
      <KTCard>
      <div className="blockWrapper">
          <div className="row">
            <div className="col-lg-3 col-md-4 mb-3">
              <div className="blockAmount">
                <p>Balance</p>
                <label>₹ {parseInt(userBalance).toFixed(2)}</label>
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
        <CommonTable data={data} columns={transactionsColumns} />
        {sharedActions.addMoneyModal && <TransactionModal />}
        {totalRecord > 10 && (
          <Pagination totalRecord={totalRecord} handleClick={handleClick} />
        )}
      </KTCard>
    </>
  );
};

export { TransactionList };
