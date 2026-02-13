import { Module } from '@nestjs/common';
import { ValentineController } from './valentine.controller';
import { ValentineService } from './valentine.service';

@Module({
  controllers: [ValentineController],
  providers: [ValentineService],
})
export class ValentineModule {}
