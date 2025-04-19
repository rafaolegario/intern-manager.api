
import { Module } from '@nestjs/common';
import { MakeCreateInternUseCase } from './factories/make-create-intern';
import { DatabaseModule } from 'src/database/database.module';
import { MakeFetchAllInternsUseCase } from './factories/make-fetch-all-interns';


@Module({
  providers: [
    {
      provide: 'CreateInternUseCase',
      useFactory: MakeCreateInternUseCase,
    },
    {
      provide: 'FetchAllInternsUseCase',
      useFactory: MakeFetchAllInternsUseCase,
    },
  ],
  exports: ['CreateInternUseCase', 'FetchAllInternsUseCase'],
  imports: [DatabaseModule],
})
export class UseCasesModule {}
