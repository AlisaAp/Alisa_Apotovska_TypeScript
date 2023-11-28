export enum EmploymentStatus {
    Active = "active",
    UnActive = "unActive",
    UnpaidLeave = "unpaidLeave",
}

export interface IEmployee {
    name: string;
    lastName: string;
    salary: number;
    bankAccountNumber: string;
    status: EmploymentStatus;
    departmentName: string;
}