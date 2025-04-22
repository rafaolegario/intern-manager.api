/*
  Warnings:

  - You are about to drop the column `internsIdScore` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "internsIdScore";

-- CreateTable
CREATE TABLE "ActivityParticipation" (
    "id" TEXT NOT NULL,
    "internId" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ActivityParticipation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActivityParticipation" ADD CONSTRAINT "ActivityParticipation_internId_fkey" FOREIGN KEY ("internId") REFERENCES "Intern"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityParticipation" ADD CONSTRAINT "ActivityParticipation_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
