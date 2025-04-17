import { Module } from '@nestjs/common'
import { CreateInternUseCase } from './create-intern.service';

@Module({
  providers: [CreateInternUseCase],
})
export class UseCasesModule {}
