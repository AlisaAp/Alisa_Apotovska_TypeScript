import {Employee} from "../classes/employee";
import {PreHiredEmployee} from "../classes/preHiredEmployee";

export interface IDepartment {
    name: string;
    domain: string;
    employees: Employee[];
    budget: IBudget;

    addNewEmployee(employee: Employee): void;
    removeEmployee(employee: Employee): void;
    calculateBalance(): number;
    hirePreEmployee(employee: PreHiredEmployee): void;

}
export interface IBudget {
    debit: number;
    credit: number;
}