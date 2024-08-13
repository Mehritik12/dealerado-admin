import CategoryIcon from "../../../../app/icons/CategoryIcon";
import DashboardIcon from "../../../../app/icons/DashboardIcon";
import PartnersIcon from "../../../../app/icons/PartnersIcon";
import PsychologistIcon from "../../../../app/icons/PsychologistIcon";
import TimerIcon from "../../../../app/icons/BlogIcon";
import { AsideMenuItem } from "./AsideMenuItem";
import BlogIcon from "../../../../app/icons/BlogIcon";

export function AsideMenuMain() {
  return (
    <>
      <AsideMenuItem to="/category" icon={<CategoryIcon/>} title="Category" />
      <AsideMenuItem to="/banner" icon={<CategoryIcon/>} title="Banner" />
      {/* {window.location.pathname === '/user/change-password' && <AsideMenuItem to="/user" icon={<PartnersIcon/>} title="Change Password" />} */}

    </>
  );
}
