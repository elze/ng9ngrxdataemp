export const entityCollectionName = "Employee";

export const pluralizedEntityName = "employees";

export const entityCollectionEndpoint = pluralizedEntityName;

export interface Employee {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
  }
  