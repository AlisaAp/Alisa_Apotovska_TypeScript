"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const employee_1 = require("./employee");
const employee_2 = require("../interfaces/employee");
class Department {
    constructor(name, domain) {
        this.name = name;
        this.domain = domain;
        this.employees = [];
        this.budget = {
            debit: 0, credit: 0
        };
    }
    addNewEmployee(employee) {
        this.employees.push(employee);
    }
    removeEmployee(employee) {
        this.employees.filter((i) => i !== employee);
    }
    calculateBalance() {
        return this.budget.debit - this.budget.credit;
    }
    hirePreEmployee(preHiredEmployee) {
        const newEmployee = new employee_1.Employee(preHiredEmployee.name, preHiredEmployee.lastName, preHiredEmployee.salary, preHiredEmployee.bankAccountNumber, this.name, employee_2.EmploymentStatus.Active);
        this.addNewEmployee(newEmployee);
    }
}
exports.Department = Department;
