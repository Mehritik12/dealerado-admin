import CategoryIcon from "../../../../app/icons/CategoryIcon";
import PartnersIcon from "../../../../app/icons/PartnersIcon";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  return (
    <>
      <AsideMenuItem to="/admin" icon={<PartnersIcon/>} title="Admin" />
      <AsideMenuItem to="/banner" icon={<CategoryIcon/>} title="Banner" />
      <AsideMenuItem to="/category" icon={<CategoryIcon/>} title="Category" />
      <AsideMenuItem to="/users" icon={<PartnersIcon/>} title="User" />

      {/* {window.location.pathname === '/user/change-password' && <AsideMenuItem to="/user" icon={<PartnersIcon/>} title="Change Password" />} */}

    </>
  );
}
