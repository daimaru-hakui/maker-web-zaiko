/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  catalogData: any;
};

export const Catalog: FC<Props> = ({ catalogData }) => {
  return (
    <div className="w-11/12 lg:w-[calc(80px)]"> 
      <Link href={catalogData?.link} target="_blank" rel="noopener noreferrer">
        <Image
          src={catalogData?.image?.url}
          className="w-full lg:max-w-[calc(80px)]"
          max-height={200}
          width={200}
          height={200}
          alt={catalogData?.maker}
        />
      </Link>
    </div>
  );
};
