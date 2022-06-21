import SideNav from '../SideNav'
import ProjectHeader from './ProjectHeader'
import ProjectTeam from './ProjectTeam'
import ProjectTickets from './ProjectTickets'
import ProjectTicketDescription from './ProjectTicketDescription'

const projects = [
  {
    name: "Jason Whisnant",
    email: "tasups@gmail.com",
    phone: "828-712-5340"
  },
  {
    name: "Ada Lovelace",
    email: "alove@gmail.com",
    phone: "123-456-7890"
  },
  ]
  
const tickets = [
  {
    title: "ticket comments",
    description: "it is a card that will display the entirety of the ticket description",
    author: "Jason Whisnant"
  },
  {
    title: "ticket data",
    description: "fake it until you make it, which is essentially building and connecting the backend and the database",
    author: "Ada Lovelace"
  },
  ]

const ProjectBoard = () => {
  return(
    <>
      <ProjectHeader />
      <SideNav />
      <div className="projectboard-container">
        <div className="projectboard-team-and-tickets">
          <ProjectTeam
          data={projects}
          />
          <ProjectTickets 
            tickets={tickets}
          />
        </div>
        <ProjectTicketDescription />
      </div>
    </>
    )
}

export default ProjectBoard;