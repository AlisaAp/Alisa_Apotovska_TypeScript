"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, lastName, salary, bankAccountNumber, departmentName, status) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this.departmentName = departmentName;
        this.bankAccountNumber = bankAccountNumber;
        this.status = status;
    }
}
exports.Employee = Employee;
