import { AddressDTO } from "src/@types/address";
import { InternDTO } from "src/@types/intern";

export interface InternRepository {
  create(intern: InternDTO, address: AddressDTO): Promise<void>
  findByCpf(cpf:string): Promise<InternDTO | null>
  findByEmail(email:string): Promise<InternDTO | null>
  fetchAll(): Promise<InternDTO[]>
  findAddressByInternId(id:string): Promise<AddressDTO>
  save(intern:InternDTO): Promise<void>
}