import { ActivityDTO, ActivityParticipationWithActivity } from "src/@types/activity";

export interface ActivityRepository {
  create(activity: ActivityDTO): Promise<void>
  fetchAllByInternId(internId: string): Promise<ActivityParticipationWithActivity[]>
  makeRelationship(internId: string, activityId: string): Promise<void>
}