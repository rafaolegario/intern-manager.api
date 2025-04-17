import { ConflictException, Injectable } from "@nestjs/common"
import { randomUUID } from "node:crypto"
import { AddressDTO } from "src/@types/address"
import { InternDTO } from "src/@types/intern"
import { AddressRepository } from "src/repositories/address-repository"
import { InternRepository } from "src/repositories/intern-repository"



interface CreateInternRequest {
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

@Injectable()
export class CreateInternUseCase {
  constructor(
    private InternRepository: InternRepository,
    private AddressRepository: AddressRepository
  ){}

  async execute({
    name,
    age,
    email,
    gender,
    cpf,
    phone,
    getInHour,
    getOutHour,
    startDate,
    endDate,
    cep,
    city,
    houseNumber,
    neighborhood,
    street,
    course,
    role,
    salary,
    university,

  }: CreateInternRequest): Promise<{}> {
    const intern = await this.InternRepository.findByCpf(cpf)

    if(intern){
      throw new ConflictException('Intern already exists!')
    }

    const internId = randomUUID()

    const internData: InternDTO = {
      id: internId,
      name,
      age,
      email,
      gender,
      cpf,
      phone,
      getInHour,
      getOutHour,
      startDate,
      endDate,
      course,
      role,
      salary,
      university, 
      delayed: 0,
      absent: 0,
      onWork: false,
      rfIdCard: undefined
    }

    const addressData : AddressDTO = {
      id: randomUUID(),
      cep,
      city,
      houseNumber,
      neighborhood,
      street,
      internId
    }

    await this.InternRepository.create(internData)
    await this.AddressRepository.create(addressData)

    return {}

  }
}
