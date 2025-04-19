
import { InternRepository } from "src/repositories/intern-repository";

export class FetchAllInternsUseCase {
  constructor(
    private InternRepository: InternRepository,
  ){}

  async execute(){
    const InternsGet = await this.InternRepository.fetchAll()
    
    const interns = await Promise.all(
      InternsGet.map(async (intern) => {
        const internAddress = await this.InternRepository.findAddressByInternId(intern.id);
        
        return {
          intern,
          internAddress
        };
      })
    );
  

    return { interns }
  }
}