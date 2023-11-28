"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreHiredEmployee = void 0;
class PreHiredEmployee {
    constructor(name, lastName, salary, bankAccountNumber) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this.bankAccountNumber = bankAccountNumber;
    }
    receiveSalary() {
        console.log(`Salary ${this.salary} for ${this.name} ${this.lastName} paid on ${this.bankAccountNumber}.`);
    }
}
exports.PreHiredEmployee = PreHiredEmployee;
