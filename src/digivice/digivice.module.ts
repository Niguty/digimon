import { Module } from '@nestjs/common';
import { DigiviceService } from './digivice.service';
import { DigiviceController } from './digivice.controller';

@Module({
  controllers: [DigiviceController],
  providers: [DigiviceService],
})
export class DigiviceModule {} 