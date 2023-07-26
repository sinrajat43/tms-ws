
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TripService } from './trip.service';
import { Trip } from './trip.schema';

@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get()
  findAll() {
    return this.tripService.findAll();
  }

  @Post()
  create(@Body() createTrip:Trip) {
    console.log('in controller of trip')
    return this.tripService.create(createTrip);
  }
}
