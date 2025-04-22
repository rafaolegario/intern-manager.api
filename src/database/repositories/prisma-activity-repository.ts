import { Injectable } from "@nestjs/common";
import { ActivityDTO } from "src/@types/activity";
import { ActivityRepository } from "src/repositories/activity-repository";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaActivityRepository implements ActivityRepository {
  constructor(private prisma: PrismaService) {}
  async create(activity: ActivityDTO) {
    await this.prisma.activity.create({
      data:activity,
    });
  }

}