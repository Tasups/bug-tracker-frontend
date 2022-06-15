import { useState } from 'react'

import ProjectCard from './ProjectCard'
import TixByPriority from './TixByPriority'
import TixByType from './TixByType'
import TixByStatus from './TixByStatus'

const Dashboard = () => {
  
  const [ open, setOpen ] = useState(true);
  
  const handleClick = () => {
    setOpen(false)
  }
  
  // const [check, setCheck] = useState(false);
  // ...
  // setCheck(prevCheck => !prevCheck);
  
  return(
    <main className="dashboard-container">
    
      { open &&
        <section className="dashboard-project-modal">
          <h2>Add A New Project</h2>
          <form>
            <label for="projectname">Project Name: </label>
            <input type="text" id="projectname" name="projectname" value="project" />
            
            <label for="description">Description: </label>
            <input type="text" id="description" name="description" value="description" />
            {/* the following input will need to be dynamic to capture all available contributors*/}
            <label for="contributors">Contributors: </label>
            <input type="text" id="contributors" name="contributors" value="contributors" />
            <button type="submit">Submit</button>
            <button className="cancel-modal" onClick={handleClick}>Cancel</button>
          </form>
          
        </section>
      }
      <div className={open && "grayed-out"}>
        <ProjectCard 
          
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