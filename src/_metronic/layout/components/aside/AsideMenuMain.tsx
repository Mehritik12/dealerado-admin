import CategoryIcon from "../../../../app/icons/CategoryIcon";
import OrderIcon from "../../../../app/icons/OrderIcon";
import PartnersIcon from "../../../../app/icons/PartnersIcon";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  return (
    <>
      <AsideMenuItem to="/category" icon={<CategoryIcon/>} title="Category" />
      <AsideMenuItem to="/banner" icon={<CategoryIcon/>} title="Banner" />
      <AsideMenuItem to="/users" icon={<PartnersIcon/>} title="Users" />
      <AsideMenuItem to="/orders" icon={<OrderIcon/>} title="Orders" />
      <AsideMenuItem to="/vehicles" icon={<OrderIcon/>} title="Vehicles" />
      {/* {window.location.pathname === '/user/change-password' && <AsideMenuItem to="/user" icon={<PartnersIcon/>} title="Change Password" />} */}

    </>
  );
}
