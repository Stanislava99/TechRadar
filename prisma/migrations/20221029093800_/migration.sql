-- CreateTable
CREATE TABLE "WhereToTryTechnology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "whereToTry" TEXT NOT NULL,
    "technologyId" TEXT NOT NULL,
    CONSTRAINT "WhereToTryTechnology_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "entryDate" DATETIME NOT NULL,
    "linkToTechnology" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "assesmentResultId" TEXT NOT NULL,
    CONSTRAINT "Technology_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Technology_assesmentResultId_fkey" FOREIGN KEY ("assesmentResultId") REFERENCES "TechnologyAssesmentResult" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TechnologyAssesmentResult" (
    "id" TEXT NOT NULL PRIMARY KEY
);
