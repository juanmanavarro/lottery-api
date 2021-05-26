import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  transform(response: string, length: number): object {
    const responseObject: object = JSON.parse(response.replace('premios=', ''));

    return {
      date: new Date(responseObject['timestamp'] * 1000).toLocaleDateString(),
      '1st_price': responseObject['numero1'].toString().substr(-length),
      '2nd_price': responseObject['numero2'].toString().substr(-length),
      '3rd_price': responseObject['numero3'].toString().substr(-length),
    };
  }
}
