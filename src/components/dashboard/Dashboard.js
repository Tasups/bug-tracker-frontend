import React from 'react';

import ProjectCard from './ProjectCard';
import TixByPriority from './TixByPriority'
import TixByType from './TixByType'
import TixByStatus from './TixByStatus'

const Dashboard = () => {
  return(
    <main className="dashboard-container">
      <ProjectCard />
      <div className="dashboard-card-container">
        <TixByPriority />
        <TixByType />
        <TixByStatus />
      </div>
    </main>
    );
};

export default Dashboard;