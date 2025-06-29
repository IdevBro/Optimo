import React from "react";
import SideBarCard from "@/components/shared/SidebarCard";

const Sidebar = () => {
  interface meniItem {
    label: string;
    href: string;
  }
  const menuItems: meniItem[] = [
    { label: "Statistika", href: "/statistic" },
    { label: "Adminlar", href: "/admin" },
    { label: "Tutor", href: "/tutor" },
    { label: "Mentrolar", href: "/teacher" },
    { label: "Guruhlar", href: "/group" },
  ];

  return (
    <div className=" shadow bg-white">
      {menuItems.map((item) => (
        <SideBarCard key={item.href} label={item.label} href={item.href} />
      ))}
    </div>
  );
};

export default Sidebar;
