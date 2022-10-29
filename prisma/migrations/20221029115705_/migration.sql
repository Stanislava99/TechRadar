/*
  Warnings:

  - You are about to drop the column `technologyName` on the `Technology` table. All the data in the column will be lost.
  - Added the required column `name` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Technology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entryDate" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "linkToTechnology" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "assesmentResultId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "currentViabilityLevel" TEXT NOT NULL DEFAULT 'HOLD',
    CONSTRAINT "Technology_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Technology_assesmentResultId_fkey" FOREIGN KEY ("assesmentResultId") REFERENCES "TechnologyAssessmentResult" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Technology" ("assesmentResultId", "currentViabilityLevel", "description", "entryDate", "id", "linkToTechnology", "type", "userId") SELECT "assesmentResultId", "currentViabilityLevel", "description", "entryDate", "id", "linkToTechnology", "type", "userId" FROM "Technology";
DROP TABLE "Technology";
ALTER TABLE "new_Technology" RENAME TO "Technology";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
