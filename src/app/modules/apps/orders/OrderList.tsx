import { CommonHeader } from "../common/common-list/components/header/ListHeader";
import { CommonTable } from "../common/common-list/table/Table";
import { KTCard } from "../../../../_metronic/helpers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../common/common-list/components/pagination/Pagination";
import { setId } from "../../../../redux/features/shared/sharedSlice";
import { OrderModal } from "./OrderModal";
import { getOrders } from "../../../../redux/features/order/_orderAction";
import { ordersColumns } from "../common/common-list/table/columns/_orderColumns";

const OrderList = () => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any) => state.orderList?.data)||[];
  const totalRecord = useSelector((state: any) => state?.orderList?.totalRecord);
  const sharedActions = useSelector((state: any) => state.sharedActions);

  useEffect(() => {
    // dispatch(setId('Order'))
    // dispatch(getOrders({ page: 1, limit: 10 }));
  }, [dispatch]);

  const handleClick = (page: number) => {
    dispatch(getOrders({ page: page, limit: 10 }));
  };

  return (
    <>
      <KTCard>
        <CommonHeader />
        <CommonTable data={data} columns={ordersColumns} />
        {sharedActions.orderModal && <OrderModal/>}
        {totalRecord > 10 && (
          <Pagination totalRecord={totalRecord}  handleClick={handleClick} />
        )}
      </KTCard>
    </>
  );
};

export { OrderList };
