import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module';
import { CreateInternController } from './controllers/create-intern.controller';
import { UseCasesModule } from 'src/use-cases/useCases.module';
import { FetchAllInternsController } from './controllers/fetch-all-interns.controller';
import { CreateActivityController } from './controllers/create-activity.controller';
import { FetchAllInternActivitiesController } from './controllers/fetch-all-intern-activities.controller';


@Module({
  controllers: [
    CreateInternController,
    FetchAllInternsController,
    CreateActivityController,
    FetchAllInternActivitiesController
  ],
  providers:[],
  imports: [DatabaseModule, UseCasesModule],
})
export class HttpModule {}
