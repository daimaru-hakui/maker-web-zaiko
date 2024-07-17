-- CreateTable
CREATE TABLE "Selery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "stock" INTEGER,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate" TEXT,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Bonmax" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "externalStock" INTEGER,
    "nextTimeStock" INTEGER,
    "nextTimeDate" TEXT,
    "leadTime" TEXT,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Servo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate2" TEXT,
    "nextTimeStock2" INTEGER,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Karsee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate2" TEXT,
    "nextTimeStock2" INTEGER,
    "nextTimeDate3" TEXT,
    "nextTimeStock3" INTEGER,
    "brand" TEXT,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Chikuma" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "inspectStock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate2" TEXT,
    "nextTimeStock2" INTEGER,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Chitose" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "externalStock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate2" TEXT,
    "nextTimeStock2" INTEGER,
    "nextTimeDate3" TEXT,
    "nextTimeStock3" INTEGER,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tombow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Burtle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "jan" TEXT,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "externalStock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate2" TEXT,
    "nextTimeStock2" INTEGER,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Joie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "productNumber" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "nextTimeDate2" TEXT,
    "nextTimeStock2" INTEGER,
    "nextTimeDate3" TEXT,
    "nextTimeStock3" INTEGER,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Seven" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "jan" TEXT,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cocos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "nextTimeDate" TEXT,
    "nextTimeStock" INTEGER,
    "jan" TEXT,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Aitoz" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER,
    "jan" TEXT,
    "createdAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Yagi" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "row" INTEGER NOT NULL,
    "productNumber" TEXT,
    "productName" TEXT,
    "color" TEXT,
    "size" TEXT,
    "stock" INTEGER NOT NULL,
    "brand" TEXT,
    "jan" TEXT,
    "createdAt" TEXT NOT NULL
);
