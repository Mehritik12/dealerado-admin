import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import {  ServiceList } from "./ServiceList";
import { SubServiceList } from "../subServices/SubServiceList";
// import "./style.scss";

const partnerBreadcrumbs: Array<PageLink> = [
  {
    title: "Service Management",
    path: "/service/list",
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
              <ServiceList />
            </>
          }
        />
          <Route
          path="subService/:id"
          element={
            <>
              <PageTitle breadcrumbs={partnerBreadcrumbs}>Sub Service list</PageTitle>
              <SubServiceList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/service/list" />} />
    </Routes>
  );
};

export default CategoryPage;
