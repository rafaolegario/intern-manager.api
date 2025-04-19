import { BadRequestException, Body, ConflictException, Controller, Inject, Post } from '@nestjs/common'
import { CreateInternUseCase } from 'src/use-cases/create-intern.service'


interface CreateInternBodySchema {
  name: string
  age: number
  gender: string
  cpf: string
  phone: string
  email: string
  course: string
  university: string
  salary: number
  role: string
  getInHour: string
  getOutHour: string
  startDate: Date
  endDate: Date
  city: string
  cep: string
  street: string
  neighborhood: string
  houseNumber: string
}

@Controller('/interns')
export class CreateInternController {

  constructor(
    @Inject('CreateInternUseCase')
    private readonly createInternUseCase: CreateInternUseCase,
  ) {}


  @Post('/create')
  async handle(@Body() body: CreateInternBodySchema) {
    try {
      const intern = await this.createInternUseCase.execute(body)
      return intern
    } catch (error) {
      if(error instanceof ConflictException){
        throw new ConflictException(error.message)
      }
      if(error instanceof BadRequestException){
      throw new BadRequestException(error.message)
    }
  }
  }
}