"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(name) {
        this.name = name;
        this.departments = [];
        this.preHiredEmployees = [];
        this.employees = [];
    }
    addDepartment(department) {
        this.departments.push(department);
    }
    getAllEmployees() {
        return [...this.employees, ...this.preHiredEmployees];
    }
}
exports.Company = Company;
