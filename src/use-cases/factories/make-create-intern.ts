import { PrismaService } from "src/database/prisma/prisma.service";
import { PrismaInternRepository } from "src/database/repositories/prisma-intern-repositoy";
import { CreateInternUseCase } from "../create-intern.service";

export function MakeCreateInternUseCase() {
  const prisma = new PrismaService()
  const internRepository = new PrismaInternRepository(prisma)

  return new CreateInternUseCase(internRepository)
  
} 