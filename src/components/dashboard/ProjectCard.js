
const ProjectCard = (props) => {
  return (
    <section className="projectcard-container">
      <div className="projectcard-title">
        <h4>Projects</h4>
        <button onClick={props.handleClick}>
          New Project
        </button>
      </div>
      <div className="projectcard-table">
        <table>
          <tr>
            <th>Project</th>
            <th>Description</th>
            <th>Contributors</th>
          </tr>
          <tr>
            <td>Bug_Bank</td>
            <td>An application for storing and tracking bugs</td>
            <td>Jason Whisnant</td>
          </tr>
          <tr>
            <td>Store App</td>
            <td>Make a copy of Amazon or something</td>
            <td>Jason Whisnant</td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default ProjectCard;