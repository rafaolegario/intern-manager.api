import { BadRequestException, Body, ConflictException, Controller, Inject, Post } from '@nestjs/common'
import { CreateActivityUseCase } from 'src/use-cases/create-activity.service'


interface CreateActivityBodySchema {
  title: string
  description: string
  dueDate: Date
  internIds: string[]
}

@Controller('/activities')
export class CreateActivityController {

  constructor(
    @Inject('CreateActivityUseCase')
    private readonly createActivityUseCase: CreateActivityUseCase,
  ) {}


  @Post('/create')
  async handle(@Body() body: CreateActivityBodySchema) {
    try {
      const activity = await this.createActivityUseCase.execute(body)
      return activity
    } catch (error) {
      if(error instanceof BadRequestException){
      throw new BadRequestException(error.message)
    }
  }
  }
}