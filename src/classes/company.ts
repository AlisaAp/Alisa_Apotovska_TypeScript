import {ICompany} from "../interfaces/company";
import {Department} from "./department";
import {PreHiredEmployee} from "./preHiredEmployee";
import {Employee} from "./employee";
export class Company implements ICompany{
    readonly name: string;
    departments: Department[];
    preHiredEmployees: PreHiredEmployee[];
    employees: Employee[];

    constructor(name: string) {
        this.name = name;
        this.departments = [];
        this.preHiredEmployees = [];
        this.employees = [];
    }

    addDepartment(department: Department): void {
        this.departments.push(department);
    }

    getAllEmployees(): (Employee | PreHiredEmployee)[] {
        return [...this.employees, ...this.preHiredEmployees];
    }
}