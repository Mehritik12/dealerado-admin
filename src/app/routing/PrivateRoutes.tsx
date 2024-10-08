import { FC, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import UserPage from "../modules/apps/users/UserPage";
import OrderPage from "../modules/apps/orders/OrderPage";
import VehiclePage from "../modules/apps/vehicles/VehiclePage";


const PrivateRoutes = () => {
  const ServicePage = lazy(() => import("../modules/apps/service/ServicePage"))
  const BannerPage = lazy(() => import("../modules/apps/banner/BannerPage"))
  const AdminPage = lazy(() => import("../modules/apps/admin/AdminPage"))
  const WalletPage = lazy(() => import("../modules/apps/wallet/WalletPage"));
  return (
    <>
      <Routes>
        <Route element={<MasterLayout />}>
        <Route path="*" element={<Navigate to={`/users/list`} />} />
          <Route
            path="users/*"
            element={
              <SuspensedView>
                <UserPage />
              </SuspensedView>
            }
          />
          <Route
            path="admin/*"
            element={
              <SuspensedView>
                <AdminPage />
              </SuspensedView>
            }
          />
            <Route
            path="wallet/*"
            element={
              <SuspensedView>
                <WalletPage />
              </SuspensedView>
            }
          />
          <Route
            path="service/*"
            element={
              <SuspensedView>
                <ServicePage />
              </SuspensedView>
            }
          />
          <Route
            path="banner/*"
            element={
              <SuspensedView>
                <BannerPage />
              </SuspensedView>
            }
          />
          <Route
            path="orders/*"
            element={
              <SuspensedView>
                <OrderPage />
              </SuspensedView>
            }
          />
          <Route
            path="vehicles/*"
            element={
              <SuspensedView>
                <VehiclePage />
              </SuspensedView>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
