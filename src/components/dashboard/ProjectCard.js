import { Link } from 'react-router-dom'

const ProjectCard = (props) => {

  return (
    <section className="projectcard-container">
      <div className="projectcard-title">
        <h4>Projects</h4>
        <button onClick={props.handleClick}>New Project</button>
      </div>
      <div className="projectcard-grid">
        <div className="projectcard-headings">
          <div>
            <h5>Project</h5>
          </div>
          <div>Description</div>
          <div>Contributors</div>
        </div>
        {props.projects?.map((project) => (
          <div key={project.projectTitle} className="projectcard-cardlink">
            {/* THE LINK BELOW SHOULD BE DYNAMIC AND LOOK SOMETHING LIKE THIS to={`/${props}/projectboard`} */}
            <Link to="/projectboard">
              <div className="projectcard-link ${project.}">{project.projectTitle}</div>
            </Link>
            <div className="projectcard-link">{project.description}</div>
            <div className="projectcard-link">{project.contributors}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectCard;

/**
 * <table>
          <tbody>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Contributors</th>
            </tr>
 * <tr key={project.projectTitle}>
                <td>{project.projectTitle}</td>
                <td>{project.description}</td>
                <td>{project.contributors}</td>
              </tr>
              </tbody>
        </table>
 * 
 */