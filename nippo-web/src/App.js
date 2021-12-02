import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  const [employees, setEmployees] = useState([]);
  const employeesRef = collection(db, "Employees");

  useEffect(() => {
    const getEmployees = async () => {
      const emp  = await getDocs(employeesRef);
      setEmployees(emp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getEmployees();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {employees.map((emp) => {
          return (
            <div>
              <h1>ID: {emp.EmployeeID}</h1>
              <h1>Name: {emp.FirstName} {emp.LastName}</h1>
              <h1>Timesheet: {emp.Timesheets}</h1>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
