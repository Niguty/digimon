import { Injectable } from '@nestjs/common';
import { CreateDigiviceDto } from './dto/create-digivice.dto';
import { UpdateDigiviceDto } from './dto/update-digivice.dto';
import { Digivice } from './entities/digivice.entity';

@Injectable()
export class DigiviceService {
  private digivices: Digivice[] = [];

  create(createDigiviceDto: CreateDigiviceDto) {
    const digivice = {
      id: this.digivices.length + 1,
      ...createDigiviceDto,
    };
    this.digivices.push(digivice);
    return digivice;
  }

  findAll() {
    return this.digivices;
  }

  findOne(id: number) {
    return this.digivices.find(digivice => digivice.id === id);
  }

  update(id: number, updateDigiviceDto: UpdateDigiviceDto) {
    const index = this.digivices.findIndex(digivice => digivice.id === id);
    if (index >= 0) {
      this.digivices[index] = { ...this.digivices[index], ...updateDigiviceDto };
      return this.digivices[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.digivices.findIndex(digivice => digivice.id === id);
    if (index >= 0) {
      const [removed] = this.digivices.splice(index, 1);
      return removed;
    }
    return null;
  }
} 