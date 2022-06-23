import { useState } from 'react'
 
 //this will need to have a maximum number, maybe 4-5 and then a scrollbar would be good
 
const ProjectTickets = (props) => {
   
  const [tickets, setTickets] = useState(props.tickets)

   console.log(tickets)
   
   return (
     <section className="projecttickets-container">
       <div className="projecttickets-title">
         <h4>Tickets</h4>
         <button>Edit</button>
       </div>
       <div className="projecttickets-table">
         <table>
           <tbody>
             <tr>
               <th>Title</th>
               <th>Description</th>
               <th>Author</th>
             </tr>
             {tickets?.map((ticket) => (
               <tr key={ticket.title}>
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