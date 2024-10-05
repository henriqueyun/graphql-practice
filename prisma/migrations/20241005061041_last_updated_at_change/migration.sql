/*
  Warnings:

  - You are about to drop the column `lastUpdateAt` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "lastUpdateAt",
ADD COLUMN     "lastUpdatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
