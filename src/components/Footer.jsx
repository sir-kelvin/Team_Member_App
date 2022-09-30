import React from 'react'

const Footer = () => {
  const today =new Date()
  return (
    <footer className='py-5 text-center'>
      <h1>Team Member Allocation - {today.getFullYear()}</h1>
    </footer>
  );
}

export default Footer
 
