import EmployeeList from "./EmployeeList";

const page = () => {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <EmployeeList />
    </div>
  );
};

export default page;
