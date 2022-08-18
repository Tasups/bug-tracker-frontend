import { createContext, useState, useEffect } from 'react'
import { issues } from '../data/projectData';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(issues);
  const [newProjTitle, setNewProjTitle] = useState("");
  const [newProjDescription, setNewProjDescription] = useState("");
  const [newProjContributors, setNewProjContributors] = useState("");
  const [ data, setData ] = useState({})
  
  console.log(projects)
  
  useEffect(() => {
    setProjects(issues)
  }, [])
  
  const toggleAddProjectModal = () => {
    setOpen((prev) => !prev);
  };
  
  const projectChange = (e) => {
    setNewProjTitle(e.target.value);
  };

  const projDescChange = (e) => {
    setNewProjDescription(e.target.value);
  };

  const projContributorsChange = (e) => {
    setNewProjContributors(e.target.value);
  };
  
  const addNewProject = (e) => {
    e.preventDefault();
    const newProject = {
      key: newProjTitle,
      projectTitle: newProjTitle,
      description: newProjDescription,
      contributors: newProjContributors,
    };
    setProjects([...projects, newProject]);
    setNewProjTitle("");
    setNewProjDescription("");
    setNewProjContributors("");
    toggleAddProjectModal();
  };

  const handleProjCancel = () => {
    setNewProjTitle("");
    setNewProjDescription("");
    setNewProjContributors("");
    toggleAddProjectModal();
  };

  const handleProjSubmit = (e) => {
    e.preventDefault();
    addNewProject(e);
  };

  
  return(
      <DataContext.Provider value={{
        data, setData, projects, open, handleProjCancel, handleProjSubmit, toggleAddProjectModal, projectChange, projDescChange, projContributorsChange
        
      }}>
        { children }
      </DataContext.Provider>
    ) 
}

export default DataContext;