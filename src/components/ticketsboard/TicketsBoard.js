import { useContext } from 'react'
import DataContext from '../../context/DataContext'

import ProjectHeader from '../projectBoard/ProjectHeader'
import SideNav from '../SideNav'
import ProjectTeam from '../projectBoard/ProjectTeam'
import ProjectTicketDescription from '../projectBoard/ProjectTicketDescription'
import TicketsComments from './TicketsComments'

const TicketsBoard = () => {

  const {
    ticketForDescription,
    comments,
    commentChange,
    contributors,
    addNewComment,
    newComment,
  } = useContext(DataContext);

  return (
    <>
      <ProjectHeader />
      <SideNav />
      <div className="ticketsboard-container">
        <div className="projectboard-team-and-tickets">
          <ProjectTeam
            data={contributors}
          />
          <ProjectTicketDescription 
            ticketForDescription={ticketForDescription}
          />
        </div>
          <div className="ticketsboard-comments">
            <TicketsComments
              comments={comments}
              commentChange={commentChange}
              addNewComment={addNewComment}
              newComment={newComment}
            />
          </div>
      </div>
    </>
  );

}

export default TicketsBoard