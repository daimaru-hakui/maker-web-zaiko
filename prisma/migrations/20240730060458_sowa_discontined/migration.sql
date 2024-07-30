/*
  Warnings:

  - You are about to drop the column `discontinued` on the `Sowa` table. All the data in the column will be lost.
  - Added the required column `isDiscontinued` to the `Sowa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sowa" DROP COLUMN "discontinued",
ADD COLUMN     "isDiscontinued" BOOLEAN NOT NULL;
