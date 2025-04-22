import { ActivityDTO } from "src/@types/activity";

export interface ActivityRepository {
  create(activity: ActivityDTO): Promise<void>
  
}