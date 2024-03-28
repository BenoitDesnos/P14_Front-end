import { create } from "zustand";
export type Employee = {
  firstname: string;
  lastname: string;
  dob: string;
  startdate: string;
  department: string;
  street: string;
  city: string;
  state: string;
  "zip-code": number;
};

type EmployeeState = {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
};

export const useEmployeeState = create<EmployeeState>((set) => ({
  employees: [],

  addEmployee: (employee) =>
    set((state) => ({ employees: [...state.employees, employee] })),
}));
