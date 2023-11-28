import {IDepartment} from "../interfaces/department";
import {IBudget} from "../interfaces/department";
import {Employee} from "./employee";
import {PreHiredEmployee} from "./preHiredEmployee";
import {EmploymentStatus} from "../interfaces/employee";

export class Department implements IDepartment {
    name: string;
    domain: string;
    employees: Employee[];
    budget: IBudget;

    constructor(name: string, domain: string) {
        this.name = name;
        this.domain = domain;
        this.employees = [];
        this.budget = {
            debit: 0, credit: 0
        };
    }

    addNewEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    removeEmployee(employee: Employee): void {
        this.employees.filter((i) => i !== employee);
    }

    calculateBalance(): number {
        return this.budget.debit - this.budget.credit;
    }

    hirePreEmployee(preHiredEmployee: PreHiredEmployee) {
        const newEmployee: Employee = new Employee(
            preHiredEmployee.name,
            preHiredEmployee.lastName,
            preHiredEmployee.salary,
            preHiredEmployee.bankAccountNumber,
            this.name,
            EmploymentStatus.Active
        );
        this.addNewEmployee(newEmployee);
    }
}