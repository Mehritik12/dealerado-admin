import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import { UserList } from "./UserList";
// import "./style.scss";

const partnerBreadcrumbs: Array<PageLink> = [
  {
    title: "User Management",
    path: "/users/list",
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
              <UserList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/users/list" />} />
    </Routes>
  );
};

export default UserPage;
