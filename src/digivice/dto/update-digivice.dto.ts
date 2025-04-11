import { PartialType } from '@nestjs/mapped-types';
import { CreateDigiviceDto } from './create-digivice.dto';

export class UpdateDigiviceDto extends PartialType(CreateDigiviceDto) {} 