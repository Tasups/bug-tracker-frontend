
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
            {props.projects?.map((el) => (
              <tr key={el.projectTitle}>
                <td>{el.projectTitle}</td>
                <td>{el.description}</td>
                <td>{el.contributors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProjectCard;