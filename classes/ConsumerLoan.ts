import { ILoan } from './ILoan';

export class ConsumerLoan implements ILoan {
    statuses: string[];
  
    constructor(statuses: string[] = ['initial']) {
      this.statuses = statuses;
    }
  }
  