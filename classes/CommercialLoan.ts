import { ILoan } from "./ILoan";

export class CommercialLoan implements ILoan {
  statuses: string[];

  constructor(statuses: string[] = ["initial"]) {
    this.statuses = statuses;
  }
}
