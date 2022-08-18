import { useContext } from 'react'
import DataContext from '../../context/DataContext'
import SideNav from '../SideNav'
import ProjectHeader from './ProjectHeader'
import ProjectTeam from './ProjectTeam'
import ProjectTickets from './ProjectTickets'
import ProjectTicketDescription from './ProjectTicketDescription'
import ProjectTicketComments from './ProjectTicketComments'

const ProjectBoard = () => {
  
  const {
    open,
    contributors,
    tickets,
    ticketForDescription,
    comments,
    newComment,
    newTicketTitle,
    newTicketDesc,
    newTicketAuthor, 
    newTicketStatus,
    newTicketPriority, 
    newTicketType,
    newTicketETA,
    parentID,
    toggleAddTicketModal,
    handleTicketCancel,
    dateConversion,
    commentChange,
    ticketTitleChange,
    ticketDescChange,
    ticketAuthorChange,
    ticketStatusChange,
    ticketPriorityChange,
    ticketTypeChange,
    ticketETAChange,
    addNewTicket,
    addNewComment,
    handleTicketClick
  } = useContext(DataContext)
  
  return(
    <>
      <ProjectHeader />
      <SideNav />
      
      <div className="projectboard-container">
  
      { open && 
          <section className="projectboard-ticket-modal">
            <h2>Add A New Ticket</h2>
            <form onSubmit={addNewTicket} autoComplete="off">
              <label htmlFor="ticket-title">Ticket Title: </label>
              <input 
                type="text" 
                id="ticket-title" 
                name="ticket-title" 
                value={newTicketTitle}
                onChange={ticketTitleChange}
                required
              />
              <label htmlFor="description">Description: </label>
              <input 
                type="text" 
                id="description" 
                name="description" 
                value={newTicketDesc} 
                onChange={ticketDescChange}
                required
              />
              {/* 
                the following input will need to be pulled from whoever the user is - set by authContext
              */}
              <label htmlFor="author">Contributors: </label>
              <input 
                type="text" 
                id="author" 
                name="author" 
                value={newTicketAuthor}
                onChange={ticketAuthorChange}
                required
              />
              
              <label htmlFor="status">Status: </label>
              <select name="status" onChange={ticketStatusChange}>
                <option value="">select status</option>
                <option value="open">open</option>
                <option value="closed">closed</option>
              </select>
              
              <label htmlFor="priority">Priority: </label>
              <select name="priority" onChange={ticketPriorityChange}>
                <option value="">select priority</option>
                <option value="low">low</option>
                <option value="normal">normal</option>
                <option value="important">important</option>
                <option value="critical">critical</option>
              </select>
              
              <label htmlFor="type">Type: </label>
              <select name="type" onChange={ticketTypeChange}>
                <option value="">select type</option>
                <option value="bug">bug</option>
                <option value="feature">feature</option>
                <option value="issue">issue</option>
              </select> 
              
              <label htmlFor="eta">ETA: </label>
              <select name="eta" onChange={ticketETAChange}>
                <option value="">select time due</option>
                <option value="one day">one day</option>
                <option value="one week">one week</option>
                <option value="one month">one month</option>
                <option value="one quarter">one quarter</option>
              </select> 
              <div className="projectboard-ticket-modal-btns">
                <button className="submit-modalBtn" type="submit">Submit</button>
                <button className="cancel-modalBtn" onClick={handleTicketCancel}>Cancel</button>
              </div>
            </form>
          </section>
        }
        
        <div className={open ? "grayed-out" : undefined}>
        
          <div className="projectboard-team-and-tickets">
            <ProjectTeam
              data={contributors}
            />
            <ProjectTicketDescription 
              ticketForDescription={ticketForDescription}
            />
          </div>
          <div className="projectboard-desc-and-comments">
            <ProjectTickets 
              tickets={tickets}
              handleCancel={handleTicketCancel}
              toggleAddTicketModal={toggleAddTicketModal}
              handleTicketClick={handleTicketClick}
            />
            <ProjectTicketComments
              comments={comments}
              commentChange={commentChange}
              addNewComment={addNewComment}
              newComment={newComment}
            />
          </div>
          
        </div>
        
      </div>
    </>
    )
}

export default ProjectBoard;