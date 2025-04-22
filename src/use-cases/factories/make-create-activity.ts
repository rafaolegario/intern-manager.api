import { PrismaService } from "src/database/prisma/prisma.service";
import { PrismaActivityRepository } from "src/database/repositories/prisma-activity-repository";
import { CreateActivityUseCase } from "../create-activity.service";

export function MakeCreateActivityUseCase() {
  const prisma = new PrismaService()
  const ActivityRepository = new PrismaActivityRepository(prisma)
  return new CreateActivityUseCase(ActivityRepository)
  
} 