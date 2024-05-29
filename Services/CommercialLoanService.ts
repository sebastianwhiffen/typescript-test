import { ILoan } from '../classes/ILoan';
import { ILoanService } from './ILoanService';

export class CommercialLoanService implements ILoanService
{
    AddStatus(statuses: string[], newStatus: string): void {
        statuses.push(newStatus);
    }
}