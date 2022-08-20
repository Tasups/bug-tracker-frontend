import { useContext } from 'react'
import DataContext from '../../context/DataContext'

import ProjectHeader from '../projectBoard/ProjectHeader'
import SideNav from '../SideNav'
import ProjectTicketDescription from '../projectBoard/ProjectTicketDescription'
import ProjectTicketComments from '../projectBoard/ProjectTicketComments'

const TicketsBoard = () => {

  const {
    ticketsForDescription,
    comments,
    commentChange,
    addNewComment,
    newComment,
  } = useContext(DataContext);

  return (
    <>
      <ProjectHeader />
      <SideNav />
      <div className="ticketsboard-container">
        {/* <ProjectTicketDescription
          ticketsForDescription={ticketsForDescription}
        /> */}
        <div className="ticketsboard-comments">
          <ProjectTicketComments
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