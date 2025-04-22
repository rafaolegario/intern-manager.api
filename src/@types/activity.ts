export interface ActivityDTO {
  id: string
  title: string
  dueDate: Date
  status:  'finished' | 'unfinished'
  description: string
}

export interface ActivityParticipationWithActivity {
  internId: string
  activityId: string
  score: number
  activity: {
    id: string
    title: string
    description: string
    dueDate: Date
    status: string
    internId: string | null
  }
}