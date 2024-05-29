import { ILoanService} from './ILoanService';

export class ConsumerLoanService implements ILoanService
{
    AddStatus(statuses: string[], newStatus: string): void {
        statuses.push(newStatus);
    }
}