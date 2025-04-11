import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DigiviceService } from './digivice.service';
import { CreateDigiviceDto } from './dto/create-digivice.dto';
import { UpdateDigiviceDto } from './dto/update-digivice.dto';

@Controller('digivice')
export class DigiviceController {
  constructor(private readonly digiviceService: DigiviceService) {}

  @Post()
  create(@Body() createDigiviceDto: CreateDigiviceDto) {
    return this.digiviceService.create(createDigiviceDto);
  }

  @Get()
  findAll() {
    return this.digiviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.digiviceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDigiviceDto: UpdateDigiviceDto) {
    return this.digiviceService.update(+id, updateDigiviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.digiviceService.remove(+id);
  }
} 