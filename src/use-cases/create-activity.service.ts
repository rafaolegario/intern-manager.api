
import { Injectable } from "@nestjs/common"
import { randomUUID } from "node:crypto"
import { ActivityDTO } from "src/@types/activity"
import { ActivityRepository } from "src/repositories/activity-repository"

interface CreateActivityRequest {
 title: string
 description: string
 dueDate: Date
 internIds: string[]
}

@Injectable()
export class CreateActivityUseCase {
  constructor(
    private activityRepository: ActivityRepository,
  ){}

  async execute({
    title,
    description,
    dueDate,
    internIds
  }: CreateActivityRequest): Promise<{}> {
    const activityId = randomUUID()

    const activityData: ActivityDTO = {
      id: activityId,
      title,
      description,
      dueDate,
      status: 'unfinished',
      internsIdScore: internIds.map(internId => ({
        id: internId,
        score: 0
      }))
    }

    await this.activityRepository.create(activityData)
    
    return {}

  }
}