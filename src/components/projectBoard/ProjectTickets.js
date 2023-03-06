
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
                 <td key={ticket.title}>{ticket.title}</td>
                 <td key={`${ticket.description}.1`}>{ticket.description}</td>
                 <td key={ticket?.author}>{ticket.author}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </section>
   );
 }
 
 export default ProjectTickets;