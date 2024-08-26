import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../_metronic/layout/core";
import { OrderList } from "./OrderList";
// import "./style.scss";

const orderBreadcrumbs: Array<PageLink> = [
  {
    title: "Order Management",
    path: "/orders/list",
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

const OrderPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="list"
          element={
            <>
              <PageTitle breadcrumbs={orderBreadcrumbs}>Order list</PageTitle>
              <OrderList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/orders/list" />} />
    </Routes>
  );
};

export default OrderPage;
