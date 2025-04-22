import { PrismaService } from "src/database/prisma/prisma.service";
import { PrismaInternRepository } from "src/database/repositories/prisma-intern-repositoy";
import { FetchAllInternActivitiesUseCase } from "../fetch-all-intern-activities.service";
import { PrismaActivityRepository } from "src/database/repositories/prisma-activity-repository";

export function MakeFetchAllInternActivitiesUseCase() {
  const prisma = new PrismaService()
  const internRepository = new PrismaInternRepository(prisma)
  const ActivityRepository = new PrismaActivityRepository(prisma)
  return new FetchAllInternActivitiesUseCase(ActivityRepository,internRepository)
  
} 