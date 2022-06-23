import { useState } from 'react'
//import DataContext from '../../context/DataContext'
import SideNav from '../SideNav'
import Header from '../Header'
import ProjectCard from './ProjectCard'
import TixByPriority from './TixByPriority'
import TixByType from './TixByType'
import TixByStatus from './TixByStatus'

import { issues } from '../../data/fakedata';

const Dashboard = () => {
  
  // can useContext to import data from db
  // const [ data, setData ] = useContext(DataContext);
  
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(issues);
  const [newProjectTitle, setNewProjectTitle] = useState("")
  const [newDescription, setNewDescription] = useState("");
  const [newContributors, setNewContributors] = useState("");

  const toggleAddProjectModal = () => {
    setOpen(prev => !prev);
  }

  const projectChange = (e) => {
    setNewProjectTitle(e.target.value)
  }

  const descriptionChange = (e) => {
    setNewDescription(e.target.value)
  }

  const contributorsChange = (e) => {
    setNewContributors(e.target.value);
  }

  const addNewProject = (e) => {
    e.preventDefault()
    const newProject = {
      key: newProjectTitle,
      projectTitle: newProjectTitle,
      description: newDescription,
      contributors: newContributors
    }
    setProjects([...projects, newProject])
    toggleAddProjectModal()
  }
  
  const handleCancel = () => {
    setNewProjectTitle("")
    setNewDescription("")
    setNewContributors("")
    toggleAddProjectModal()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addNewProject(e)
  }
  
  return(
    <>
      <Header projects={projects[0].contributors} />
      <SideNav />
      <main className="dashboard-container">
      
        { open &&
          <section className="dashboard-project-modal">
            <h2>Add A New Project</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="projectname">Project Name: </label>
              <input 
                type="text" 
                id="projectname" 
                name="projectname" 
                value={newProjectTitle}
                onChange={projectChange}
                required
              />
              <label htmlFor="description">Description: </label>
              <input 
                type="text" 
                id="description" 
                name="description" 
                value={newDescription} 
                onChange={descriptionChange}
                required
              />
              {/* the following input will need to be dynamic to capture all available contributors*/}
              <label htmlFor="contributors">Contributors: </label>
              <input 
                type="text" 
                id="contributors" 
                name="contributors" 
                value={newContributors}
                onChange={contributorsChange}
                required
              />
              <div className="dashboard-project-modal-btns">
                <button className="submit-modalBtn" type="submit">Submit</button>
                <button className="cancel-modalBtn" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </section>
        }
        
        <div className={open ? "grayed-out" : undefined}>
          <ProjectCard 
            projects={projects}
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