"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SideBarItemProps {
  label: string;
  href: string;
}

const SideBarCard: React.FC<SideBarItemProps> = ({ label, href }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className="block">
      <button
        className={`shadow py-[40px] px-[20px] w-full  ${
          pathname === href
            ? "text-blue border-l-[4px] border-blue"
            : "text-dark"
        }`}
      >
        {label}
      </button>
    </Link>
  );
};

export default SideBarCard;
