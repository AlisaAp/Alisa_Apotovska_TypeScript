import {IDepartment} from "./department";
import {Employee} from "../classes/employee";

export interface IAccountingDepartment extends IDepartment {
    balance: number;
    addToBalance(amount: number): void;
    removeFromBalance(amount: number): void;
    paySalary(employees: Employee[]): void;
}