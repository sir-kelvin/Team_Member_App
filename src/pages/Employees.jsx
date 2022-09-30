import React from 'react';

const Employees = ({
  selectedTeam,
  setSelectedTeam,
  employees,
  handleEmployeeCardSelect,
}) => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-auto mb-3 mx-auto">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
            >
              <option value="Team A">TEAM A</option>
              <option value="Team B">TEAM B</option>
              <option value="Team C">TEAM C</option>
              <option value="Team D">TEAM D</option>
            </select>
          </div>
        </div>
        <div className="row">
          {employees.map((employee) => {
            const { id, designation, fullName, image, teamName } = employee;

            return (
              <div
                className="col-12 col-md-4"
                key={id}
                onClick={() => handleEmployeeCardSelect(id)}
              >
                <div
                  className={
                    selectedTeam === teamName
                      ? 'card mb-3 standout'
                      : 'card mb-3'
                  }
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={image}
                    className="card-img-top"
                    alt="employee_image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Full Name: {fullName}</h5>
                    <p className="card-text">
                      <span className="fw-bolder">Designation:</span>
                      {designation}
                    </p>
                    <p className="fw-bolder">Current Team: {teamName}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Employees;
