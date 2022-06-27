
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


 //this will need to have a maximum number, maybe 4-5 and then a scrollbar would be good
 
const ProjectTickets = (props) => {
  
   return (
     <section className="projecttickets-container">

     { props.open && 
          <section className="dashboard-project-modal">
            <h2>Add A New Ticket</h2>
            <form onSubmit={props.addNewTicket} autoComplete="off">
              <label htmlFor="ticket-title">Ticket Title: </label>
              <input 
                type="text" 
                id="ticket-title" 
                name="ticket-title" 
                value={props.newTitle}
                onChange={props.titleChange}
                required
              />
              <label htmlFor="description">Description: </label>
              <input 
                type="text" 
                id="description" 
                name="description" 
                value={props.newDescription} 
                onChange={props.descriptionChange}
                required
              />
              {/* the following input will need to be pulled from whoever the user is - set by authContext*/}
              <label htmlFor="author">Contributors: </label>
              <input 
                type="text" 
                id="author" 
                name="author" 
                value={props.newAuthor}
                onChange={props.authorChange}
                required
              />
              <div className="dashboard-project-modal-btns">
                <button className="submit-modalBtn" type="submit">Submit</button>
                <button className="cancel-modalBtn" onClick={props.handleCancel}>Cancel</button>
              </div>
            </form>
          </section>
        }
     
       <div className="projecttickets-title">
          <h4>Tickets</h4>
          <button onClick={props.toggleAddTicketModal}>
            <FontAwesomeIcon className="faPlus-btn" icon={faPlus} />
          </button>
       </div>
       <div className="projecttickets-table">
         <table>
            <tbody>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
              </tr>
            </tbody>
          </table>
          <table className="projecttickets-td">
            <tbody>
             {props.tickets?.map((ticket) => (
               <tr key={ticket.id}>
                 <td>{ticket.title}</td>
                 <td>{ticket.description}</td>
                 <td>{ticket.author}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </section>
   );
 }
 
 export default ProjectTickets;