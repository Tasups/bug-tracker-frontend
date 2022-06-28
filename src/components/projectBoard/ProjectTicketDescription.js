 
const ProjectTicketDescription = (props) => {

  return (
    <section className="ticketsdetails-container">
      <div className="ticketsdetails-title">
        <h4>Selected Ticket Details</h4>
      </div>
      <div className="ticketsdetails-info">
        <div className="item-a ticketsdetails-infocard">
          <h5>Ticket Title</h5>
          <p>{props.title}</p>
        </div>
        <div className="item-b ticketsdetails-infocard">
          <h5>Author</h5>
          <p>{props.author}</p>
        </div>
        <div className="item-c ticketsdetails-infocard">
          <h5>Description</h5>
          <p>{props.description}</p>
        </div>
        <div className="item-d ticketsdetails-infocard">
          <h5>Status</h5>
          <p>{props.status}</p>
        </div>
        <div className="item-e ticketsdetails-infocard">
          <h5>Priority</h5>
          <p>{props.priority}</p>
        </div>
        <div className="item-f ticketsdetails-infocard">
          <h5>Type</h5>
          <p>{props.type}</p>
        </div>
        <div className="item-g ticketsdetails-infocard">
          <h5>Time to Complete</h5>
          <p>{props.ETA}</p>
        </div>
      </div>
    </section>
  );
 }
 
 export default ProjectTicketDescription;