import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePollDto } from './dto/create-poll.dto';

@Injectable()
export class PollService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePollDto) {
    const pollData: Prisma.PollCreateInput = {
      title: data.title,
      options: data.options,
      user: {
        connect: { id: data.userId },
      },
    };

    return this.prisma.poll.create({
      data: pollData,
    });
  }
}
