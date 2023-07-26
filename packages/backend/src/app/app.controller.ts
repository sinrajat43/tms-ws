import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getData() {
    console.log('THIS IS HIT!!!!!!!!!!!!')
    return {"value":this.appService.getData()};
  }
}
