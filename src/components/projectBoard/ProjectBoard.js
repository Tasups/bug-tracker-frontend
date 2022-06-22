import SideNav from '../SideNav'
import ProjectHeader from './ProjectHeader'
import ProjectTeam from './ProjectTeam'
import ProjectTickets from './ProjectTickets'
import ProjectTicketDescription from './ProjectTicketDescription'
import ProjectTicketComments from './ProjectTicketComments'

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
  
const comments = [
  {
    comment: "This is something to consider upping in the priority level. It needs to be at least important.",
    id: 10,
    author: "Jason Whisnant",
    date: "June 22nd, 2022"
  },
  {
    comment: "Why not consider moving this to its own project as we could consider it being componentized and used over and over again.",
    id: 11, 
    author: "Ada Lovelace",
    date: "June 13th, 2000"
  },
  {
    comment: "It seems that the comments are working well in this system.",
    id: 17,
    author: "William Whisnant",
    date: "May 31st, 2022"
  },
  {
    comment: "there are only five or six different issues on the system.",
    id: 20,
    author: "Santa Claus",
    date: "January 1st, 2022"
  },
  {
    comment: "Going to consider a situation with a greater outcomes to the situation that we have to work with on this system.",
    id: 25,
    author: "Alan Turing",
    date: "March 4th, 2022"
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
        <div className="projectboard-desc-and-comments">
          <ProjectTicketDescription />
          <ProjectTicketComments
            comments={comments}
          />
        </div>
      </div>
    </>
    )
}

export default ProjectBoard;