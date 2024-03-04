"use client";
import Link from "next/link";
import { useEmployeeState } from "@/store/useEmployee";
import { EmployeeTable } from "@/components/EmployeeTable/EmployeeTable";


const EmployeeList = () => {
  const { employees } = useEmployeeState();

  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <EmployeeTable employees={employees} />
        <Link href={"/"}>Home test</Link>
      </div>
    </>
  );
};

export default EmployeeList;
