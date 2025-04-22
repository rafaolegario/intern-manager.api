import { Injectable } from "@nestjs/common"
import { InternDTO } from "src/@types/intern"
import { InternRepository } from "src/repositories/intern-repository"
import { PrismaService } from "../prisma/prisma.service"
import { AddressDTO } from "src/@types/address"

@Injectable()
export class PrismaInternRepository implements InternRepository {
  constructor(private prisma: PrismaService) {}
 
  async create(intern: InternDTO, address: AddressDTO): Promise<void> {
    await this.prisma.$transaction(async (prisma) => {
      await prisma.intern.create({
        data: intern
      })

      await prisma.address.create({
        data: address
      })
    })
  }

  async fetchAll() {
    const interns =  await this.prisma.intern.findMany()
    return interns.map(intern => ({
      ...intern, 
      salary: Number(intern.salary), 
    }));  
  }

  async findByCpf(cpf: string): Promise<InternDTO | null> {
    const intern = await this.prisma.intern.findUnique({ where: { cpf } })

    if (!intern) return null
    
    const internDTO: InternDTO = {
      ...intern,
      salary: intern.salary.toNumber(), 
    }
    return internDTO
  }

  async findByEmail(email: string): Promise<InternDTO | null> {
    const intern = await this.prisma.intern.findUnique({ where: { email } })

    if (!intern) return null
    
    const internDTO: InternDTO = {
      ...intern,
      salary: intern.salary.toNumber(), 
    }
    return internDTO
  }

  async findAddressByInternId(id: string) {
    const address = await this.prisma.address.findFirst({
      where:{
        internId: id
      }
    })

    if(!address){
      throw new Error("address not found")
    }

    return address
  }

  async save(intern: InternDTO){
    await this.prisma.intern.update({
      where: {
        id: intern.id,
      },
      data: intern
    })
  }

  async findById(id: string) {
    const intern =  await this.prisma.intern.findUnique({
      where: { id }
    })

    if(!intern) return null

    const internDTO: InternDTO = {
      ...intern,
      salary: intern.salary.toNumber(), 
    }

    return internDTO
  }

}
