import {IPreHiredEmployee} from "../interfaces/preHiredEmployee";

export class PreHiredEmployee implements IPreHiredEmployee {
    name: string;
    lastName: string;
    salary: number;
    bankAccountNumber: string;

    constructor(name: string, lastName: string, salary: number, bankAccountNumber: string) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this.bankAccountNumber = bankAccountNumber;
    }

    receiveSalary(): void {
        console.log(`Salary ${this.salary} for ${this.name} ${this.lastName} paid on ${this.bankAccountNumber}.`);
    }
}