import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {};

  @Get()
  async getPrizes(@Query('length') length: number): Promise<any> {
    let { data } = await axios.get('https://api.elpais.com/ws/LoteriaNavidadPremiados?n=resumen');

    return this.appService.transform(data, length);
  }
}
