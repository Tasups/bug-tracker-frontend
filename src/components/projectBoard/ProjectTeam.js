
const ProjectTeam = (props) => {
  
  return(
    <section className="projectteam-container">
        <div className="projectteam-title">
          <h4>Personnel</h4>
          {/*
            EDIT PERSONNEL SHOULD BE RENDERED DYNAMICALLY IS USER IS ADMIN
          */}
          <button style={{margin: "1rem", padding: "0.5rem"}}>Edit</button>
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