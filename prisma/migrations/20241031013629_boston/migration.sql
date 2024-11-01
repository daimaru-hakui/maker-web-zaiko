-- CreateTable
CREATE TABLE "Boston" (
    "id" TEXT NOT NULL,
    "row" INTEGER NOT NULL,
    "productNumber" TEXT,
    "productName" TEXT,
    "size" TEXT,
    "stock" INTEGER NOT NULL,
    "externalStock" INTEGER,
    "nextTimeStock" INTEGER,
    "nextTimeDate" TEXT,
    "jan" TEXT,
    "isDiscontinued" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Boston_pkey" PRIMARY KEY ("id")
);
