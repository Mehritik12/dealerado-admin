import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core/";
import "./style.scss";

const partnerBreadcrumbs: Array<PageLink> = [
  {
    title: "Partner Management",
    path: "/partners/list",
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

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="list"
          element={
            <>
              <PageTitle breadcrumbs={partnerBreadcrumbs}>Partner list</PageTitle>
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/partners/list" />} />
    </Routes>
  );
};

export default UsersPage;
