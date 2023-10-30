
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TripService } from './trip.service';
import { Trip } from './trip.schema';

@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get()
  async findAll() {
    return await this.tripService.findAll();
  }

  @Post()
  create(@Body() createTrip:Trip) {
    return this.tripService.create(createTrip);
  }
}
