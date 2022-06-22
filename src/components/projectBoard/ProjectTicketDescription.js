 
const ProjectTicketDescription = () => {
  return(
    <section className="ticketsdetails-container">
      <div className="ticketsdetails-title">
        <h4>Selected Ticket Details</h4>
      </div>
      <div className="ticketsdetails-info">
        <div className="item-a ticketsdetails-infocard">
          <h5>Ticket Title</h5>
          <p>dynamic title</p>
        </div>
        <div className="item-b ticketsdetails-infocard">
          <h5>Author</h5>
          <p>Jason Whisnant</p>
        </div>
        <div className="item-c ticketsdetails-infocard">
          <h5>Description</h5>
          <p>it is a card that will display the entirety of the ticket description</p>
        </div>
        <div className="item-d ticketsdetails-infocard">
          <h5>Status</h5>
          <p>open</p>
        </div>
        <div className="item-e ticketsdetails-infocard">
          <h5>Priority</h5>
          <p>Important</p>
        </div>
        <div className="item-f ticketsdetails-infocard">
          <h5>Type</h5>
          <p>Feature</p>
        </div>
        <div className="item-g ticketsdetails-infocard">
          <h5>ETA in hours</h5>
          <p>8</p>
        </div>
      </div>
    </section>
     )
 }
 
 export default ProjectTicketDescription;