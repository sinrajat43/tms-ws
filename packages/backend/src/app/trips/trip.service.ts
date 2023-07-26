import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trip, TripDocument } from './trip.schema';

@Injectable()
export class TripService {
  constructor(@InjectModel(Trip.name) private tripModel: Model<TripDocument>) {}

  async findAll(): Promise<Trip[]> {
    return this.tripModel.find().exec();
  }

  async create(createTripDto): Promise<Trip> {
    const trip = new this.tripModel(createTripDto);
    return trip.save();
  }
}
