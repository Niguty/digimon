import { Injectable } from '@nestjs/common';
import { CreateDigimonDto } from './dto/create-digimon.dto';
import { UpdateDigimonDto } from './dto/update-digimon.dto';
import { Digimon } from './entities/digimon.entity';

@Injectable()
export class DigimonService {
  private digimons: Digimon[] = [];

  create(createDigimonDto: CreateDigimonDto) {
    const digimon = {
      id: this.digimons.length + 1,
      ...createDigimonDto,
    };
    this.digimons.push(digimon);
    return digimon;
  }

  findAll() {
    return this.digimons;
  }

  findOne(id: number) {
    return this.digimons.find(digimon => digimon.id === id);
  }

  update(id: number, updateDigimonDto: UpdateDigimonDto) {
    const index = this.digimons.findIndex(digimon => digimon.id === id);
    if (index >= 0) {
      this.digimons[index] = { ...this.digimons[index], ...updateDigimonDto };
      return this.digimons[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.digimons.findIndex(digimon => digimon.id === id);
    if (index >= 0) {
      const [removed] = this.digimons.splice(index, 1);
      return removed;
    }
    return null;
  }
} 