import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module';
import { CreateInternController } from './controllers/create-intern.controller';
import { UseCasesModule } from 'src/use-cases/useCases.module';
import { FetchAllInternsController } from './controllers/fetch-all-interns.controller';
import { CreateActivityController } from './controllers/create-activity.controller';


@Module({
  controllers: [
    CreateInternController,
    FetchAllInternsController,
    CreateActivityController
  ],
  providers:[],
  imports: [DatabaseModule, UseCasesModule],
})
export class HttpModule {}
