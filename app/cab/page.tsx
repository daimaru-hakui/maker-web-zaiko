import { Catalog } from "@/components/Catalog";
import { CatalogArea } from "@/components/CatalogArea";
import { fetchCatalog } from "@/utils/fetch-catalog";
import Link from "next/link";
import React from "react";

export default async function Cab() {

  const catalog = await fetchCatalog("vvwIY8WAXeU3IkQGQY9s");

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <Link
        href="https://www.united-athle.jp/ua/stock/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mt-12 p-6 text-white rounded-md bg-blue-800 hover:bg-blue-700 cursor-pointer">
          UUnited Athle 在庫
        </div>
      </Link>
      <CatalogArea>
        <Catalog catalogData={catalog} />
      </CatalogArea>
    </main>
  );
}