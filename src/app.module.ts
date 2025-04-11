import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DigimonModule } from './digimon/digimon.module';
import { DigiviceModule } from './digivice/digivice.module';

@Module({
  imports: [DigimonModule, DigiviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
