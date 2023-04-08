import React from "react";
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants/navigation";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">Open Shops </span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => {
          return <SidebarLink key={item.key} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
