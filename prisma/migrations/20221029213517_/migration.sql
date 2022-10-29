/*
  Warnings:

  - You are about to drop the `TechnologyAssessmentResult` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `assesmentResultId` on the `Technology` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TechnologyAssessmentResult";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Technology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entryDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "linkToTechnology" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "currentViabilityLevel" TEXT NOT NULL DEFAULT 'HOLD',
    CONSTRAINT "Technology_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Technology" ("currentViabilityLevel", "description", "entryDate", "id", "linkToTechnology", "name", "type", "userId") SELECT "currentViabilityLevel", "description", "entryDate", "id", "linkToTechnology", "name", "type", "userId" FROM "Technology";
DROP TABLE "Technology";
ALTER TABLE "new_Technology" RENAME TO "Technology";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
