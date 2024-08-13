import { Navigate, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { ChangePasswordWrapper } from "./ProfileWrapper";
import './styles.scss'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: "Update Profile",
    path: "/profile/update",
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
        <Route
          path="update"
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Brand list</PageTitle>
              <ChangePasswordWrapper />
            </>
          }
        />
      <Route index element={<Navigate to="/profile/update" />} />
    </Routes>
  );
};

export default UsersPage;
