import { LoanServiceFactory } from "./factory";
import { ConsumerLoan } from "./classes/ConsumerLoan";


var loan = new ConsumerLoan();

new LoanServiceFactory().GetService(loan).AddStatus(loan.statuses, "Approved");

console.log(loan.statuses);




