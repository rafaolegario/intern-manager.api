import {  BadRequestException, Controller, Get, Inject, Post } from '@nestjs/common'
import { FetchAllInternsUseCase } from 'src/use-cases/fetch-all-interns.service'

@Controller('/interns')
export class FetchAllInternsController {

  constructor(
    @Inject('FetchAllInternsUseCase')
    private readonly fetchAllInternsUseCase: FetchAllInternsUseCase,
  ) {}


  @Get()
  async handle() {
    try{
    const interns = await this.fetchAllInternsUseCase.execute()
    return interns
    }catch(error){
      throw new BadRequestException(error.message)
    }
  }
}
