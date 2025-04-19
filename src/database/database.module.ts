import { Module } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'
import { PrismaInternRepository } from './repositories/prisma-intern-repositoy'

@Module({
  providers: [
    PrismaService,
    PrismaInternRepository
   
  ],
  exports: [
    PrismaService,
    PrismaInternRepository
   
  ],
})
export class DatabaseModule {}
