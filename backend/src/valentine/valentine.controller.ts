import { Controller, Get } from '@nestjs/common';
import { ValentineService } from './valentine.service';

@Controller('api/valentine')
export class ValentineController {
  constructor(private readonly valentineService: ValentineService) {}

  @Get('images')
  getImages() {
    return this.valentineService.getImageList();
  }

  @Get('message')
  getMessage() {
    return this.valentineService.getValentineMessage();
  }
}
