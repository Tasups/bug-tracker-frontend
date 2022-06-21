
const ProjectHeader = () => {
  
  return(
    <header className="header-container">
        <h3>Projects</h3>
      {
      /* 
        consider putting optional rendering here if projects.length === 1, as there would be only one project in the array and so it wouldn't show up on the Dashboard which should have numerous projects in the array also consider the conditional rendering for the h3 so that instead of Dashboard you have only the userName
      */
      } 
      <div className="header-project-titles">
        <h4>Project Title</h4>
        <h4>this is a placeholder for the description</h4>
      </div>
    </header>
    )
}

export default ProjectHeader;