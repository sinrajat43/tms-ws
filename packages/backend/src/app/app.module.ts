import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripSchema } from './trips/trip.schema';
import { TripController } from './trips/trip.controller';
import { TripService } from './trips/trip.service';


@Module(
  {
    imports: [ConfigModule.forRoot(),
      MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          uri: configService.get('MONGODB_URI'),
          dbName: 'tms-prod',
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }),
        inject: [ConfigService],
      }),MongooseModule.forFeature([{ name: 'Trip', schema: TripSchema }])],
  controllers: [AppController,TripController],
  providers: [AppService,TripService],
})
export class AppModule {}
