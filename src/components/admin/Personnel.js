import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const ProjectTeam = (props) => {
  
  return(
    <section className="personnel-container">
        <div className="personnel-title">
          <h4>Personnel</h4>
          <button style={{margin: "1rem", padding: "0.5rem"}}>Edit</button>
        </div>
        <div className="personnel-table">
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
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                  <td>{person.id}</td>
                  <td>
                    <button 
                      className="personnel-editbtn"
                      onClick={(e) => alert("put the edit function here!")}
                    >
                      <FontAwesomeIcon className="faEdit-btn" icon={faPenToSquare} />
                    </button>
                  </td>
                  <td> 
                    <button 
                      className="personnel-trashbtn"
                      onClick={(e) => props.deleteContributor(e, person.id)}
                    >
                      <FontAwesomeIcon className="faTrash-btn" icon={faTrash}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </section>
    )
}

export default ProjectTeam;