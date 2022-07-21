import { Link } from 'react-router-dom'

const ProjectCard = (props) => {

  return (
    <section className="projectcard-container">
      <div className="projectcard-title">
        <h4>Projects</h4>
        <button onClick={props.handleClick}>New Project</button>
      </div>

      <div className="projectcard-table">
        <table>
          <tbody>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Contributors</th>
            </tr>
            {props.projects?.map((project) => (
              <tr key={project.projectTitle}>
                <td>
                  <button className="projectcard-link-btn">
                    <Link to="/projectboard" className="projectcard-link">
                      {project.projectTitle}
                    </Link>
                  </button>
                </td>
                <td>{project.description}</td>
                <td>{project.contributors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProjectCard;