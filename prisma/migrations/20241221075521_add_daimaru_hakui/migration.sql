-- CreateTable
CREATE TABLE "DaimaruHakui" (
    "id" TEXT NOT NULL,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "externalStock" INTEGER,
    "nextTimeStock" INTEGER,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DaimaruHakui_pkey" PRIMARY KEY ("id")
);
