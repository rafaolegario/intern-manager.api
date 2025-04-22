import { ActivityRepository } from "src/repositories/activity-repository";
import { InternRepository } from "src/repositories/intern-repository";

interface FetchAllInternActivitiesRequest {
  internId: string
}

interface FetchAllInternActivitiesResponse {
  Activities:{
    id: string
    title: string
    dueDate: Date
    description: string
    status: 'finished' | 'unfinished'
    internsIdScore: {
     id: string
     score: number
    }[]
  }[]
}

export class FetchAllInternActivitiesUseCase {
  constructor(
    private activitiesRepository: ActivityRepository,
    private internRepository: InternRepository
  ){}

  async execute({
    internId
  }: FetchAllInternActivitiesRequest): Promise<FetchAllInternActivitiesResponse> {
    const intern = await this.internRepository.findById(internId)

    if(!intern){
      throw new Error('Intern not found')
    }

    const ActivitiesParticipation = await this.activitiesRepository.fetchAllByInternId(internId)

    const Activities = ActivitiesParticipation.map(({ activity, score }) => ({
      id: activity.id,
      title: activity.title,
      dueDate: activity.dueDate,
      description: activity.description,
      status: activity.status as 'finished' | 'unfinished',
      internsIdScore: [
        {
          id: internId,
          score,
        },
      ],
    }));

    return { Activities } 
  }
}