import { useState, useContext } from 'react'
import DataContext from '../../context/DataContext'

import ProjectCard from './ProjectCard'
import TixByPriority from './TixByPriority'
import TixByType from './TixByType'
import TixByStatus from './TixByStatus'

const Dashboard = () => {
  
  // can useContext to import data from db
  // const [ data, setData ] = useContext(DataContext);
  
  const [ open, setOpen ] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    //setData to something
    setOpen(false)
  }
  
  const toggleAddProjectModal = () => {
    setOpen(prev => !prev);
  }
  
  
  return(
    <main className="dashboard-container">
    
      { open &&
        <section className="dashboard-project-modal">
          <h2>Add A New Project</h2>
          <form onSubmit={handleSubmit}>
            <label for="projectname">Project Name: </label>
            <input type="text" id="projectname" name="projectname" value="project" />
            
            <label for="description">Description: </label>
            <input type="text" id="description" name="description" value="description" />
            {/* the following input will need to be dynamic to capture all available contributors*/}
            <label for="contributors">Contributors: </label>
            <input type="text" id="contributors" name="contributors" value="contributors" />
            <button type="submit">Submit</button>
            <button className="cancel-modal" onClick={toggleAddProjectModal}>Cancel</button>
          </form>
          
        </section>
        
      //   className={isActive ? 'your_className': null} 
      // onClick={toggleClass} 
      }
      <div className={open && "grayed-out"}>
        <ProjectCard 
          handleClick={toggleAddProjectModal}
        />
        <div className="dashboard-card-container">
          <TixByPriority />
          <TixByType />
          <TixByStatus />
        </div>
      </div>
    </main>
    );
};

export default Dashboard;