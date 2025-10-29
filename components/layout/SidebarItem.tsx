"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

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
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <Link
      href={link}
      onClick={onClose}
      rel="noopener noreferrer"
      target={blank ? "_blank" : "_self"}
    >
      <div
        className={`py-1 px-3 my-1 text-xs hover:text-white rounded hover:bg-blue-700 ${
          isHydrated && pathname === link ? "bg-blue-700 text-white" : ""
        }`}
      >
        {label}
      </div>
    </Link>
  );
};
