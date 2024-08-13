import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import {  CategoryList } from "./CategoryList";
// import "./style.scss";

const partnerBreadcrumbs: Array<PageLink> = [
  {
    title: "User Management",
    path: "/category/list",
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
              <PageTitle breadcrumbs={partnerBreadcrumbs}>Category list</PageTitle>
              <CategoryList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/category/list" />} />
    </Routes>
  );
};

export default CategoryPage;
