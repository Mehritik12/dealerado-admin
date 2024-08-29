import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import {  SubServiceList } from "./SubServiceList";
// import "./style.scss";

const partnerBreadcrumbs: Array<PageLink> = [
  {
    title: "Sub Service Management",
    path: "/subService/list",
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

const CategoryPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="list"
          element={
            <>
              <PageTitle breadcrumbs={partnerBreadcrumbs}>Service list</PageTitle>
              <SubServiceList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/subService/list" />} />
    </Routes>
  );
};

export default CategoryPage;
