import { useContext, useEffect } from 'react'
import axios from 'axios'

import DataContext from '../../context/DataContext'
import SideNav from '../SideNav'
import Header from '../Header'
import ProjectCard from './ProjectCard'
import TixByPriority from './TixByPriority'
import TixByType from './TixByType'
import TixByStatus from './TixByStatus'

const Dashboard = () => {
  
  const {
    open, 
    projects, 
    setProjects,
    project,
    setProject,
    selectProject,
    newProjTitle,
    newProjDescription,
    newProjContributors,
    toggleAddProjectModal,
    handleProjCancel,
    handleProjSubmit,
    projectChange,
    projDescChange, 
    projContributorsChange
  } = useContext(DataContext)

   useEffect(() => {
     axios
       .get(`http://localhost:5000/api/v1/projects/dashboard`)
       .then((res) => {
         setProjects(res.data.projects);
       })
       .catch((err) => console.log(err));
   }, [setProjects]);

  return (
    <>
      <Header />
      <SideNav />
      <main className="dashboard-container">
        {open && (
          <section className="dashboard-project-modal">
            <h2>Add A New Project</h2>
            <form onSubmit={handleProjSubmit} autoComplete="off">
              <label htmlFor="projectname">Project Name: </label>
              <input
                type="text"
                id="projectname"
                name="projectname"
                value={newProjTitle}
                onChange={projectChange}
                required
              />
              <label htmlFor="description">Description: </label>
              <input
                type="text"
                id="description"
                name="description"
                value={newProjDescription}
                onChange={projDescChange}
                required
              />
              {/* the following input will need to be dynamic to capture all available contributors*/}
              <label htmlFor="contributors">Contributors: </label>
              <input
                type="text"
                id="contributors"
                name="contributors"
                value={newProjContributors}
                onChange={projContributorsChange}
                required
              />
              <div className="dashboard-project-modal-btns">
                <button className="submit-modalBtn" type="submit">
                  Submit
                </button>
                <button className="cancel-modalBtn" onClick={handleProjCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}

        <div className={open ? "grayed-out" : undefined}>
          <ProjectCard
            projects={projects}
            selectProject={selectProject}
            handleClick={toggleAddProjectModal}
          />
          <div className="dashboard-card-container">
            <TixByPriority />
            <TixByType />
            <TixByStatus />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;