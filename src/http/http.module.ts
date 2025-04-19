import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module';
import { CreateInternController } from './controllers/create-intern.controller';
import { UseCasesModule } from 'src/use-cases/useCases.module';
import { FetchAllInternsController } from './controllers/fetch-all-interns.controller';


@Module({
  controllers: [
    CreateInternController,
    FetchAllInternsController
  ],
  providers:[],
  imports: [DatabaseModule, UseCasesModule],
})
export class HttpModule {}
