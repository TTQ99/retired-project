import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Teams } from 'src/interfaces/teams.interfaces';
import { Repository } from 'typeorm';
import { TeamsEntity } from './teams.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(TeamsEntity)
    private teamsRepository: Repository<TeamsEntity>,
  ) {}

  async findAll(): Promise<TeamsEntity[]> {
    return await this.teamsRepository.find();
  }
  async create(post: TeamsEntity): Promise<TeamsEntity> {
    const { name } = post;

    return await this.teamsRepository.save({ name });
  }
}
