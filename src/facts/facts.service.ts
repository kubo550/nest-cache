import { Injectable } from '@nestjs/common';
import { CreateFactDto } from './dto/create-fact.dto';
import { UpdateFactDto } from './dto/update-fact.dto';

const facts = [
  { id: '1', text: 'Cats are the best' },
  { id: '2', text: 'Dogs are the best' },
] as any;

const factIdGenerator = () => {
  return facts.length + 1;
};

@Injectable()
export class FactsService {
  create(createFactDto: CreateFactDto) {
    const newFact = {
      id: factIdGenerator().toString(),
      ...createFactDto,
    };
    facts.push(newFact);
    return newFact;
  }

  findAll() {
    return facts;
  }

  findOne(id: number) {
    const founedFact = facts.find((fact) => fact.id === id.toString());

    return founedFact;
  }

  update(id: number, updateFactDto: UpdateFactDto) {
    const updatedFact = {
      id: id.toString(),
      ...updateFactDto,
    };
    facts[id - 1] = updatedFact;

    return updatedFact;
  }

  remove(id: number) {
    return `This action removes a #${id} fact`;
  }
}
