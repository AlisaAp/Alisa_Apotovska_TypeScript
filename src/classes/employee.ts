import {IEmployee} from "../interfaces/employee";
import {EmploymentStatus} from "../interfaces/employee";

export class Employee implements IEmployee {
    name: string;
    lastName: string;
    salary: number;
    bankAccountNumber: string;
    status: EmploymentStatus;
    departmentName: string;

    constructor(name: string, lastName: string, salary: number, bankAccountNumber: string, departmentName: string, status: EmploymentStatus) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this.departmentName = departmentName;
        this.bankAccountNumber = bankAccountNumber;
        this.status = status;
    }
}