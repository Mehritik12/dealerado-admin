import { CommonHeader } from "../common/common-list/components/header/ListHeader";
import { CommonTable } from "../common/common-list/table/Table";
import { KTCard } from "../../../../_metronic/helpers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../common/common-list/components/pagination/Pagination";
import { setId } from "../../../../redux/features/shared/sharedSlice";
import { BannerModal } from "./BannerModal";
import { getBanner } from "../../../../redux/features/banner/_bannerAction";
import { bannerColumns } from "../common/common-list/table/columns/_bannerColumns";

const BannerList = () => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any) => state?.banners?.data) ||[];
  const totalRecord = useSelector((state: any) => state?.bannerList?.totalRecord);
  const sharedActions = useSelector((state: any) => state?.sharedActions);

  useEffect(() => {
    dispatch(setId('Banner'))
    dispatch(getBanner({ page: 1, limit: 10 }));
  }, [dispatch]);

  const handleClick = (page: number) => {
    dispatch(getBanner({ page: page, limit: 10 }));
  };
  return (
    <>
      <KTCard>
        <CommonHeader />
        <CommonTable data={data} columns={bannerColumns} />
        {sharedActions.bannerModal && <BannerModal/>}
        {totalRecord > 10 && (
          <Pagination totalRecord={totalRecord} handleClick={handleClick} />
        )}
      </KTCard>
    </>
  );
};

export { BannerList };
