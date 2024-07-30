import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalog } from "@/utils/fetch-catalog";
import Link from "next/link";
import React from "react";

export default async function Toms() {

  const catalog = await fetchCatalog("yAYKz6WaC0RuCGKiLvrk");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <Link
        href="https://tomsj.com/brand/stock/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mt-12 p-6 text-white rounded-md bg-blue-800 hover:bg-blue-700 cursor-pointer">
          Printstar 在庫
        </div>
      </Link>
      <CatalogArea>
        <Catalog catalogData={catalog} />
      </CatalogArea>
    </main>
  );
}
