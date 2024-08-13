import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import {  BannerList } from "./BannerList";
// import "./style.scss";

const partnerBreadcrumbs: Array<PageLink> = [
  {
    title: "User Management",
    path: "/banner/list",
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

const BannerPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="list"
          element={
            <>
              <PageTitle breadcrumbs={partnerBreadcrumbs}>Banner list</PageTitle>
              <BannerList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/banner/list" />} />
    </Routes>
  );
};

export default BannerPage;
