import React from 'react';

const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="text-center mt-4">
      <h3>Team Member Allocation</h3>
      <h5>
        {selectedTeam} has {teamMemberCount}{' '}
        {teamMemberCount < 2 ? `Member` : 'Members'}
      </h5>
    </header>
  );
};

export default Header;
