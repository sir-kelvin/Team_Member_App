import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from '../assets/data';
import { Navbar, Header, Footer } from './index';
import { Employees, TeamMembers, NotFound } from '../pages/index';

const App = () => {
  // initialise state
  const selected = localStorage.getItem('selectedTeam');
  const [employees, setEmployees] = useState(data);
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(selected) || 'Team A'
  );
  const [team, setTeam] = useState(null);

  function handleEmployeeCardSelect(id) {
    const selectedCard = employees.map((employee) =>
      employee.id === id
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: '' }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(selectedCard);
  }

  const teamMemberCount = employees.filter(
    (employee) => employee.teamName === selectedTeam
  );

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                selectedTeam={selectedTeam}
                teamMemberCount={teamMemberCount.length}
              />
              <Employees
                employees={employees}
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
                handleEmployeeCardSelect={handleEmployeeCardSelect}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/members"
          element={
            <TeamMembers
              teamMemberCount={teamMemberCount.length}
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
