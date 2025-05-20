import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Url } from './types/url';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Url[]> {
    return this.appService.getHello();
  }
}
