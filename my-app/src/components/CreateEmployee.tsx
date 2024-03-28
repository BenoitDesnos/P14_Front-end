"use client";
import Link from "next/link";
import { CreateEmployeeForm } from "./CreateEmployeeForm";
const CreateEmployee = () => {
  return (
    <>
      <div className="text-3xl font-bold text-slate-900">
        <h1>HRnet</h1>
      </div>
      <div className="mt-2 w-full ">
        <Link
          href="/employee-list"
          className="underline underline-offset-1 hover:text-red-600 text-slate-500 flex justify-center mt-2 w-full"
        >
          View Current Employees
        </Link>
        <h2 className="w-full text-center text-lg font-bold">
          Create Employee
        </h2>
        <CreateEmployeeForm />
      </div>
    </>
  );
};

export default CreateEmployee;
