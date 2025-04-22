export interface ActivityDTO {
  id: string
  title: string
  dueDate: Date
  status:  'finished' | 'unfinished'
  description: string
  internsIdScore: 
    {
      id: string
      score: number
    }[]
  
}