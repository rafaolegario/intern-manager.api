import { PrismaService } from "src/database/prisma/prisma.service";
import { PrismaInternRepository } from "src/database/repositories/prisma-intern-repositoy";
import { FetchAllInternsUseCase } from "../fetch-all-interns.service";

export function MakeFetchAllInternsUseCase() {
  const prisma = new PrismaService()
  const internRepository = new PrismaInternRepository(prisma)
  return new FetchAllInternsUseCase(internRepository)
  
} 