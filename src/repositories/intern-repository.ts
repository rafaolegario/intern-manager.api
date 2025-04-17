import { InternDTO } from "src/@types/intern";

export interface InternRepository {
  create(intern: InternDTO): Promise<void>
  findByCpf(cpf:string): Promise<InternDTO | null>
}