"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

type Props = {
  label: string;
  link: string;
  blank: boolean;
  onClose?: () => void;
};

export const SidebarItem: FC<Props> = ({
  label,
  link,
  blank,
  onClose,
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      onClick={onClose}
      rel="noopener noreferrer"
      target={blank ? "_blank" : "_self"}
    >
      <div
        className={`py-1 px-3 my-1 text-xs hover:text-white rounded hover:bg-blue-700 ${pathname === link ? "bg-blue-700 text-white" : ""
          }`}
      >
        {label}
      </div>
    </Link>
  );
};
