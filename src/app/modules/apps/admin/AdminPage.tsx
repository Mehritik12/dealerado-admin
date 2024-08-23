import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import { AdminList } from "./AdminList";

// import "./style.scss";

const partnerBreadcrumbs: Array<PageLink> = [
  {
    title: "Admin Management",
    path: "/admin/list",
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

const UserPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="list"
          element={
            <>
              <PageTitle breadcrumbs={partnerBreadcrumbs}>User list</PageTitle>
              <AdminList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/admin/list" />} />
    </Routes>
  );
};

export default UserPage;
