import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  getTeams() {
    return this.teamsService.findAll();
  }

  @Post()
  async create(@Body() post) {
    console.log(1111111);

    return this.teamsService.create(post);
  }
}
