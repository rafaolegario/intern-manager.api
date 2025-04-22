
import { Module } from '@nestjs/common';
import { MakeCreateInternUseCase } from './factories/make-create-intern';
import { DatabaseModule } from 'src/database/database.module';
import { MakeFetchAllInternsUseCase } from './factories/make-fetch-all-interns';
import { MakeCreateActivityUseCase } from './factories/make-create-activity';


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
    {
      provide: 'CreateActivityUseCase',
      useFactory: MakeCreateActivityUseCase,
    },
  ],
  exports: ['CreateInternUseCase', 'FetchAllInternsUseCase', 'CreateActivityUseCase'],
  imports: [DatabaseModule],
})
export class UseCasesModule {}
