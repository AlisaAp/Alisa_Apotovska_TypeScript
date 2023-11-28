import {Department} from "../classes/department";
import {PreHiredEmployee} from "../classes/preHiredEmployee";
import {Employee} from "../classes/employee";

export interface ICompany {
    name: string;
    departments: Department[];
    preHiredEmployees: PreHiredEmployee[];
    employees: Employee[];

    addDepartment(department: Department): void
    getAllEmployees(): (Employee | PreHiredEmployee)[]

}