-- CreateTable
CREATE TABLE "Sowa" (
    "id" TEXT NOT NULL,
    "row" INTEGER NOT NULL,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER NOT NULL,
    "externalStock" INTEGER,
    "jan" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sowa_pkey" PRIMARY KEY ("id")
);
