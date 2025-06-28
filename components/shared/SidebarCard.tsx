"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SideBarItemProps {
  label: string;
  href: string;
}

const SideBarCard: React.FC<SideBarItemProps> = ({ label, href }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className="block">
      <Button
        variant={pathname === href ? "secondary" : "ghost"}
        className="bg-white w-full justify-start text-left"
      >
        {label}
      </Button>
    </Link>
  );
};

export default SideBarCard;
