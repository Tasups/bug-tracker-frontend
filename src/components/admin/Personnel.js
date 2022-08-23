import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const ProjectTeam = (props) => {
  
  return(
    <section className="projectteam-container">
        <div className="projectteam-title">
          <h4>Team</h4>
          <button style={{margin: "1rem", padding: "0.5rem"}}>Edit</button>
        </div>
        <div className="projectteam-table">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {props.contributors?.map((person) => (
                <tr key={person.name}>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                  <td>{person.role}</td>
                  <td>
                    <button className="personnel-editbtn">
                      <FontAwesomeIcon className="faEdit-btn" icon={faPenToSquare} />
                    </button>
                  </td>
                  <td> 
                    <button className="personnel-trashbtn">
                      <FontAwesomeIcon className="faTrash-btn" icon={faTrash}/>
                    </button>
                  </td>
                  {/*
                  <td onClick={(e) => props.handleClick(e, key)}>Delete</td>
                   onClick={(e) => props.handleTicketClick(e, ticket.id)}
                 key={ticket.id}
                 */}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </section>
    )
}

export default ProjectTeam;