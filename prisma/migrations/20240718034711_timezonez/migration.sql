/*
  Warnings:

  - The `createdAt` column on the `Bonmax` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Burtle` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Chikuma` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Chitose` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Cocos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Joie` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Karsee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Selery` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Servo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Seven` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Tombow` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `Yagi` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Aitoz" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "Bonmax" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Burtle" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Chikuma" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Chitose" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Cocos" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Joie" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Karsee" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Selery" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Servo" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Seven" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Tombow" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Yagi" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP;
