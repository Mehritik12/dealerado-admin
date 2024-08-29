import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import { UserList } from "./WalletList";
import { TransactionList } from "./transactions/TransactionList";
// import "./style.scss";

const partnerBreadcrumbs: Array<PageLink> = [
  {
    title: "User Management",
    path: "/wallet/list",
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
              <PageTitle breadcrumbs={partnerBreadcrumbs}>Users list</PageTitle>
              <UserList />
            </>
          }
        />
        <Route
          path="/:id"
          element={
            <>
              <PageTitle breadcrumbs={partnerBreadcrumbs}>Transactions List</PageTitle>
              <TransactionList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/wallet/list" />} />
    </Routes>
  );
};

export default UserPage;
