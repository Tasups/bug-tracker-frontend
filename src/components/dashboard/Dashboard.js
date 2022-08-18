import { useContext } from 'react'
import DataContext from '../../context/DataContext'
//import DataContext from '../../context/DataContext'
import SideNav from '../SideNav'
import Header from '../Header'
import ProjectCard from './ProjectCard'
import TixByPriority from './TixByPriority'
import TixByType from './TixByType'
import TixByStatus from './TixByStatus'

//import { issues } from '../../data/projectData';

const Dashboard = () => {
  
  const {
    open, 
    projects, 
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
  // can useContext to import data from db
  // const [ data, setData ] = useContext(DataContext);

  // const [open, setOpen] = useState(false);
  // const [projects, setProjects] = useState(issues);
  // const [newProjTitle, setNewProjTitle] = useState("");
  // const [newProjDescription, setNewProjDescription] = useState("");
  // const [newProjContributors, setNewProjContributors] = useState("");

  /*
  GET PROJECTS BASED UPON THE USER ID
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  */

  // const toggleAddProjectModal = () => {
  //   setOpen((prev) => !prev);
  // };

  // const projectChange = (e) => {
  //   setNewProjTitle(e.target.value);
  // };

  // const descriptionChange = (e) => {
  //   setNewProjDescription(e.target.value);
  // };

  // const contributorsChange = (e) => {
  //   setNewProjContributors(e.target.value);
  // };

  // const addNewProject = (e) => {
  //   e.preventDefault();
  //   const newProject = {
  //     key: newProjTitle,
  //     projectTitle: newProjTitle,
  //     description: newProjDescription,
  //     contributors: newProjContributors,
  //   };
  //   setProjects([...projects, newProject]);
  //   setNewProjTitle("");
  //   setNewProjDescription("");
  //   setNewProjContributors("");
  //   toggleAddProjectModal();
  // };

  // const handleProjCancel = () => {
  //   setNewProjTitle("");
  //   setNewProjDescription("");
  //   setNewProjContributors("");
  //   toggleAddProjectModal();
  // };

  // const handleProjSubmit = (e) => {
  //   e.preventDefault();
  //   addNewProject(e);
  // };
  
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