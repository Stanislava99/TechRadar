/*
  Warnings:

  - You are about to drop the `TechnologyAssesmentResult` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `assesmentResultId` on the `Technology` table. All the data in the column will be lost.
  - Added the required column `assessmentResultId` to the `Technology` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technologyName` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TechnologyAssesmentResult";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TechnologyAssessmentResult" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Technology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entryDate" DATETIME NOT NULL,
    "technologyName" TEXT NOT NULL,
    "linkToTechnology" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "assessmentResultId" TEXT NOT NULL,
    CONSTRAINT "Technology_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Technology_assessmentResultId_fkey" FOREIGN KEY ("assessmentResultId") REFERENCES "TechnologyAssessmentResult" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Technology" ("description", "entryDate", "id", "linkToTechnology", "userId") SELECT "description", "entryDate", "id", "linkToTechnology", "userId" FROM "Technology";
DROP TABLE "Technology";
ALTER TABLE "new_Technology" RENAME TO "Technology";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
