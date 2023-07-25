import { NestFactory } from '@nestjs/core';
     import { AppModule } from './app/app.module';
     import { MicroserviceOptions,Transport } from '@nestjs/microservices';

     async function bootstrap() {
      const app = await NestFactory.create(AppModule)
       const microservice = app.connectMicroservice({
         transport: Transport.TCP,
         options: { port: 3001 }, // change the port if needed
       });
       await app.startAllMicroservices();
       await app.listen(3000);

       console.log('Application is listening');
     }
     bootstrap();
