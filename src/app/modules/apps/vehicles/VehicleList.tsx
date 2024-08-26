import { PartnersListHeader } from "../common/common-list/components/header/ListHeader";
import { CommonTable } from "../common/common-list/table/Table";
import { KTCard } from "../../../../_metronic/helpers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../common/common-list/components/pagination/Pagination";
import { setId } from "../../../../redux/features/shared/sharedSlice";
import { usersColumns } from "../common/common-list/table/columns/_userColumns";
import { getVehicles } from "../../../../redux/features/vehicle/_vehicleAction";
import { VehicleModal } from "./VehicleModal";

const VehicleList = () => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any) => state.vehicleList.data);
  const { totalRecord } = useSelector((state: any) => state.vehicleList);
  const sharedActions = useSelector((state: any) => state.sharedActions);

  useEffect(() => {
    dispatch(setId('Vehicle'))
    dispatch(getVehicles({ page: 1, limit: 10 }));
  }, [dispatch]);

  const handleClick = (page: number) => {
    dispatch(getVehicles({ page: page, limit: 10 }));
  };

  return (
    <>
      <KTCard>
        <PartnersListHeader />
        <CommonTable data={data} columns={usersColumns} />
        {sharedActions.vehicleModal && <VehicleModal/>}
        {totalRecord > 10 && (
          <Pagination totalRecord={totalRecord} handleClick={handleClick} />
        )}
      </KTCard>
    </>
  );
};

export { VehicleList };
