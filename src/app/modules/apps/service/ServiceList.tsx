import { CommonHeader } from "../common/common-list/components/header/ListHeader";
import { CommonTable } from "../common/common-list/table/Table";
import { KTCard } from "../../../../_metronic/helpers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryColumns } from "../common/common-list/table/columns/_categoryColumns";
import { getCategory } from "../../../../redux/features/category/_categoryAction";
import { Pagination } from "../common/common-list/components/pagination/Pagination";
import { setId } from "../../../../redux/features/shared/sharedSlice";
import { ServiceModal } from "./ServiceModal";
import { TYPE } from "../../../../utils/const";
import { getServices } from "../../../../redux/features/service/_serviceAction";

const CategoryList = () => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any ) => state.service?.data) || []; 
  const { totalRecord } = useSelector((state: any) => state.categoryList);
  const sharedActions = useSelector((state: any) => state.sharedActions);

  useEffect(() => {
    dispatch(setId(TYPE.SERVICE))
    dispatch(getServices({}))
    // dispatch(getCategory({ page: 1, limit: 10 }));
  }, [dispatch]);

  const handleClick = (page: number) => {
    dispatch(getCategory({ page: page, limit: 10 }));
  };

  return (
    <>
      <KTCard>
        <CommonHeader />
        <CommonTable data={data} columns={categoryColumns} />
        {sharedActions.serviceModal && <ServiceModal/>}
        {totalRecord > 10 && (
          <Pagination totalRecord={totalRecord} handleClick={handleClick} />
        )}
      </KTCard>
    </>
  );
};

export { CategoryList };
