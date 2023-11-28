"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingDepartment = void 0;
const department_1 = require("./department");
const employee_1 = require("../interfaces/employee");
class AccountingDepartment extends department_1.Department {
    constructor(name, domain) {
        super(name, domain);
        this.balance = 0;
    }
    addToBalance(amount) {
        this.balance += amount;
    }
    removeFromBalance(amount) {
        this.balance -= amount;
    }
    paySalary(employees) {
        employees.forEach(({ salary, bankAccountNumber, status }) => {
            if (status === employee_1.EmploymentStatus.Active)
                console.log(`paid ${salary} to ${bankAccountNumber}`);
        });
    }
}
exports.AccountingDepartment = AccountingDepartment;
