import { useEffect, useState } from "react";
import CategoryIcon from "../../../../app/icons/CategoryIcon";
import OrderIcon from "../../../../app/icons/OrderIcon";
import PartnersIcon from "../../../../app/icons/PartnersIcon";
import VehicleIcon from "../../../../app/icons/VehicleIcon";
import { AsideMenuItem } from "./AsideMenuItem";
import { getRole } from "../../../../app/modules/auth";
import AdminIcons from "../../../../app/icons/AdminIcons";

export function AsideMenuMain() {
  const [role, setRole]= useState('user');

  useEffect(()=>{
    let r= getRole();
    setRole(r);
    console.log("Role", r)
  },[]);
  return (
    <>
      {role== 'sadmin' && <AsideMenuItem to="/admin" icon={<AdminIcons/>} title="Admin" /> }
      <AsideMenuItem to="/banner" icon={<CategoryIcon/>} title="Banner" />
      <AsideMenuItem to="/orders" icon={<OrderIcon/>} title="Orders" />
      <AsideMenuItem to="/users" icon={<PartnersIcon/>} title="Users" />
       {/*<AsideMenuItem to="/vehicles" icon={<VehicleIcon/>} title="Vehicles" /> */}

      {/* {window.location.pathname === '/user/change-password' && <AsideMenuItem to="/user" icon={<PartnersIcon/>} title="Change Password" />} */}

    </>
  );
}
