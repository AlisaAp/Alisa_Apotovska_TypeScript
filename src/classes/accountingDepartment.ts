import {Department} from "./department";
import {IAccountingDepartment} from "../interfaces/accountingDepartment";
import {EmploymentStatus} from "../interfaces/employee";
import {Employee} from "./employee";
export class AccountingDepartment extends Department implements IAccountingDepartment {
    balance: number;

    constructor(name: string, domain: string) {
        super(name, domain);
        this.balance = 0;
    }

    addToBalance(amount: number): void {
        this.balance += amount;
    }

    removeFromBalance(amount: number): void {
        this.balance -= amount;
    }

    paySalary(employees: Employee[]): void {
        employees.forEach(({salary, bankAccountNumber, status}) => {
            if (status === EmploymentStatus.Active)
                console.log(`paid ${salary} to ${bankAccountNumber}`);
        });
    }
}