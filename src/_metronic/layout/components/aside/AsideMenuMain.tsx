import { useEffect, useState } from "react";
import CategoryIcon from "../../../../app/icons/CategoryIcon";
import OrderIcon from "../../../../app/icons/OrderIcon";
import PartnersIcon from "../../../../app/icons/PartnersIcon";
import VehicleIcon from "../../../../app/icons/VehicleIcon";
import { AsideMenuItem } from "./AsideMenuItem";
import { getRole } from "../../../../app/modules/auth";
import AdminIcons from "../../../../app/icons/AdminIcons";
import LogoutIcon from "../../../../app/icons/Logout";
import MaintanceModeIcon from "../../../../app/icons/ReportIcon";
import ReportIcon from "../../../../app/icons/ReportIcon";

export function AsideMenuMain() {
  const [role, setRole] = useState('user');

  useEffect(() => {
    let r = getRole();
    setRole(r);
    console.log("Role", r)
  }, []);
  return (
    <>
      {/* <AsideMenuItem to="/dashboard" icon={<PartnersIcon />} title="Dashboard" /> */}
      <AsideMenuItem to="/users" icon={<PartnersIcon />} title="Users" />
      <AsideMenuItem to="/orders" icon={<OrderIcon />} title="Orders" />
      {/* <AsideMenuItem to="/banner" icon={<CategoryIcon/>} title="Banner" /> */}
      {/* <AsideMenuItem to="/wallet" icon={<CategoryIcon/>} title="Wallet Management" /> */}
      <AsideMenuItem to="/service" icon={<CategoryIcon/>} title="Services" />
      {role === 'sadmin' && <AsideMenuItem to="/admin" icon={<AdminIcons />} title="Employees" />}
      {/* <AsideMenuItem to="/coupon" icon={<CategoryIcon/>} title="Coupons" /> */}
      {/* <AsideMenuItem to="/report" icon={<ReportIcon/>} title="Reports" /> */}
      {/* <AsideMenuItem to="/report" icon={<MaintanceModeIcon/>} title="Maintainance Mode" /> */}
      <AsideMenuItem to="/signin" icon={<LogoutIcon />} title="Logout" />
    </>
  );
}
