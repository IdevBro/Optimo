import React from "react";
import SideBarCard from "../shared/SidebarCard";

const Sidebar = () => {
  const menuItems = [
    { label: "Statistika", href: "/statistic" },
    { label: "Adminlar", href: "/admin" },
    { label: "Tutor", href: "/tutor" },
    { label: "Mentrolar", href: "/teacher" },
    { label: "Guruhlar", href: "/group" },
  ];

  return (
    <div className="bg-red-500">
      <h1>Sidebar</h1>
      {menuItems.map((item) => (
        <SideBarCard key={item.href} label={item.label} href={item.href} />
      ))}
    </div>
  );
};

export default Sidebar;
