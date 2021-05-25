import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller()
export class AppController {
  @Get()
  async getHello(): Promise<any> {
    let { data } = await axios.get('https://api.elpais.com/ws/LoteriaNavidadPremiados?n=resumen');
    let response = data.replace('premios=', '');

    return response;
  }
}
