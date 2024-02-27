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
  employees: [
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
    {
      firstname: "benoit test",
      lastname: "desnos",
      dob: "02/06/1990",
      startdate: "02/06/1990",
      department: "Human Resources",
      street: "street",
      city: "city",
      state: "CA",
      "zip-code": 1,
    },
  ],
  addEmployee: (employee) =>
    set((state) => ({ employees: [...state.employees, employee] })),
}));
