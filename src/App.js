import React from "react";
import logo from "./logo.svg";
import "./App.css";
import mockedData from "./mocked-data/MOCK_DATA-1";

function App() {
  // zadanie 1 - wydobądź nazwy departamentów, tak żeby się nie powtarzały

  const allDepatments = mockedData.map((data) => data.department);
  const departments = [...new Set(allDepatments)];
  // console.log(departments.length);

  // zadanie - 2 - stwórz funkcję, która na podstawie departamentu zwróci obiekt, w którym będą zawarte dane:
  // 1)lista wszystkich pracowników pracujących w tym depie,
  // 2) średnie salary

  const departmentData = () => {
    const departmentObjectData = departments.map((department) => {
      const peopleInDepartment = mockedData.filter(
        (data) => data.department === department
      );
      const namesPeopleInDepartment = peopleInDepartment.map(
        (personInDepartment) =>
          personInDepartment.first_name + " " + personInDepartment.last_name
      );
      // console.log(peopleInDepartment);
      const salaries = peopleInDepartment.map(
        (personInDepartment) => +personInDepartment.salary.slice(1)
      );
      const averageSalary =
        "$" + (salaries.reduce((acc, cur) => acc + cur) / salaries.length).toFixed(2);
      return {
        department: department,
        department_worker_list: namesPeopleInDepartment,
        department_average_salary: averageSalary,
      };
    });

    return departmentObjectData;
  };
  console.log(departmentData());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
