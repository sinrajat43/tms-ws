import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Trip extends Document {

  @Prop({ required: true })
  source: string;

  @Prop({ required: true })
  destination: string;

}

export type TripDocument = Trip & Document; // Added export for TripDocument

export const TripSchema = SchemaFactory.createForClass(Trip);
export const TripModel = mongoose.model<TripDocument>('Trip', TripSchema);
