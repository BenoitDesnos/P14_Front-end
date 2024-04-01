"use client";
import Link from "next/link";
import { useEmployeeState } from "@/store/useEmployee";
import { EmployeeTable } from "@/components/EmployeeTable/EmployeeTable";


const EmployeeList = () => {
  const { employees } = useEmployeeState();

  return (
    <>
      <EmployeeTable employees={employees} />
      <Link className="bg-black p-2 rounded-sm text-white " href={"/"}>
        Create Employee
      </Link>
    </>
  );
};

export default EmployeeList;
