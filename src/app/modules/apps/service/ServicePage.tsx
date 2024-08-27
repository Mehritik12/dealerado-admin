import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import {  CategoryList } from "./ServiceList";
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
              <CategoryList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/service/list" />} />
    </Routes>
  );
};

export default CategoryPage;
