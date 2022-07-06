
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProjectTickets = (props) => {
  
   return (
     <section className="projecttickets-container">
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
               <tr
                 onClick={(e) => props.handleTicketClick(e, ticket.id)}
                 key={ticket.id}
               >
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