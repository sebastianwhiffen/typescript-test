import { ILoan } from './classes/ILoan';
import { CommercialLoanService } from './Services/CommercialLoanService';
import { ConsumerLoanService } from './Services/ConsumerLoanService';
import { ILoanService } from './Services/ILoanService';

export class LoanServiceFactory 
{
    GetService(loan: ILoan): ILoanService {
        switch (loan.constructor.name) {
          case 'ConsumerLoan':
            return new ConsumerLoanService();
          case 'CommercialLoan':
            return new CommercialLoanService();
          default:
            throw new Error("Invalid loan type");
        }
      }
}