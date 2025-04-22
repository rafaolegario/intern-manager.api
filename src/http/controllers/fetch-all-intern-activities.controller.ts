import {  BadRequestException, Controller, Get, Inject, Param } from '@nestjs/common'
import { FetchAllInternActivitiesUseCase } from 'src/use-cases/fetch-all-intern-activities.service';


@Controller('/activities')
export class FetchAllInternActivitiesController {

  constructor(
    @Inject('FetchAllInternActivitiesUseCase')
    private readonly fetchAllInternActivitiesUseCase: FetchAllInternActivitiesUseCase,
  ) {}


  @Get('/:id')
  async handle(@Param('id') id: string): Promise<ReturnType<FetchAllInternActivitiesUseCase['execute']>> {
    try {
      const activities = await this.fetchAllInternActivitiesUseCase.execute({internId: id});
      return activities;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
