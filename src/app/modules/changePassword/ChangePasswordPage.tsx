import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { ChangePasswordWrapper } from "./ChangePasswordWrapper";
import './styles.scss'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: "Change Password",
    path: "/user/change-password",
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
          path="change-password"
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Brand list</PageTitle>
              <ChangePasswordWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/user/change-password" />} />
    </Routes>
  );
};

export default UsersPage;
