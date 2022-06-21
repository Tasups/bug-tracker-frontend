
const ProjectTeam = (props) => {
  
  return(
    <section className="projectteam-container">
        <div className="projectteam-title">
          <h4>Team</h4>
          <button>Edit</button>
        </div>
        <div className="projectteam-table">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              {props.data?.map((person) => (
                <tr key={person.name}>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </section>
    )
}

export default ProjectTeam;