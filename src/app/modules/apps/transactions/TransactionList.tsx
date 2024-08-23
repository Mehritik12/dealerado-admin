import { PartnersListHeader } from "../common/common-list/components/header/ListHeader";
import { CommonTable } from "../common/common-list/table/Table";
import { KTCard } from "../../../../_metronic/helpers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../common/common-list/components/pagination/Pagination";
import { setId } from "../../../../redux/features/shared/sharedSlice";
import { TYPE } from "../../../../utils/const";
import { transactionsColumns } from "../common/common-list/table/columns/_transactionColumns";
import { TransactionModal } from "./TransactionModal";
import { getTransactions } from "../../../../redux/features/transaction/_transactionAction";
const TransactionList = () => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any) => state.transactions?.data);
  const totalRecord :number= useSelector((state: any) => state.transactions?.totalRecord);
  const sharedActions = useSelector((state: any) => state.sharedActions);

  useEffect(() => {
    dispatch(setId(TYPE.TRANSACTION))
    if (sharedActions.formDetails._id) {
      dispatch(getTransactions({ userId: sharedActions.formDetails._id, page: 1, limit: 10 }));
    }
  }, []);

  const handleClick = (page: number) => {
    dispatch(getTransactions({ userId: sharedActions.formDetails._id, page: page, limit: 10 }));
  };

  return (
    <>
      <KTCard>
        <PartnersListHeader />
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
