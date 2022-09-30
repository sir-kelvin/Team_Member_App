import React, { useState } from 'react';

const TeamMembers = ({ employees, selectedTeam, setTeam, teamMemberCount }) => {
  // intialise state
  const [groupedEmployees, setGroupedEmployees] = useState(
    groupedTeamMembers()
  );

  function groupedTeamMembers() {
    let teams = [];
    // team A
    var teamAMembers = employees?.filter(
      (employee) => employee.teamName === 'Team A'
    );
    var teamA = {
      team: 'Team A',
      members: teamAMembers,
      collapsed: selectedTeam === 'Team A' ? false : true,
    };
    teams.push(teamA);

    // team B
    var teamBMembers = employees.filter(
      (employee) => employee.teamName === 'Team B'
    );
    var teamB = {
      team: 'Team B',
      members: teamBMembers,
      collapsed: selectedTeam === 'Team B' ? false : true,
    };
    teams.push(teamB);

    // team C
    var teamCMembers = employees.filter(
      (employee) => employee.teamName === 'Team C'
    );
    var teamC = {
      team: 'Team C',
      members: teamCMembers,
      collapsed: selectedTeam === 'Team C' ? false : true,
    };
    teams.push(teamC);

    // team D
    var teamDMembers = employees.filter(
      (employee) => employee.teamName === 'Team D'
    );
    var teamD = {
      team: 'Team D',
      members: teamDMembers,
      collapsed: selectedTeam === 'Team D' ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    let newGroupedData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedEmployees(newGroupedData);
    setTeam(event.currentTarget.id);
  }
  return (
    <main className="container-fluid">
      <div className="text-center mt-4">
        <h3>Team Member Allocation</h3>
        <h5>
          {selectedTeam} has {teamMemberCount} Members
        </h5>
      </div>

      {groupedEmployees.map((employee) => {
        const { team, members, collapsed } = employee;
        return (
          <div key={team} className="card mt-4" style={{ cursor: 'pointer' }}>
            <div
              id={team}
              className="card-header text-black"
              onClick={handleTeamClick}
            >
              Team Name: {team}
            </div>
            <div
              id={`collapse_${team}`}
              className={`card-body ${collapsed === true ? 'collapse' : ''}`}
            >
              <hr />
              {members.map((member) => {
                const { fullName, designation } = member;
                return (
                  <>
                    <h5 className="card-title">Full Name:{fullName}</h5>
                    <p className="card-text">Designation: {designation}</p>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default TeamMembers;
