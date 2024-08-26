import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import { VehicleList } from "./VehicleList";
// import "./style.scss";

const partnerBreadcrumbs: Array<PageLink> = [
  {
    title: "Vehicle Management",
    path: "/vehicles/list",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const VehiclePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="list"
          element={
            <>
              <PageTitle breadcrumbs={partnerBreadcrumbs}>Vehicle list</PageTitle>
              <VehicleList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/vehicles/list" />} />
    </Routes>
  );
};

export default VehiclePage;
