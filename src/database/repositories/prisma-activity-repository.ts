import { Injectable } from "@nestjs/common";
import { ActivityDTO } from "src/@types/activity";
import { ActivityRepository } from "src/repositories/activity-repository";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaActivityRepository implements ActivityRepository {
  constructor(private prisma: PrismaService) {}
  async fetchAllByInternId(internId: string) {
    const participations = await this.prisma.activityParticipation.findMany({
      where: { internId },
      include: {
        activity: true,
      },
    });
  
    return participations
  }

  async makeRelationship(internId: string, activityId: string){
    await this.prisma.activityParticipation.create({
      data: {
        internId,
        activityId,
        score: 0,
      }
    });
  }

  async create(activity: ActivityDTO) {
    await this.prisma.activity.create({
      data:activity,
    });
  }
 
}