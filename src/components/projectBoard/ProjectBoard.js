import { useState } from 'react'

import SideNav from '../SideNav'
import ProjectHeader from './ProjectHeader'
import ProjectTeam from './ProjectTeam'
import ProjectTickets from './ProjectTickets'
import ProjectTicketDescription from './ProjectTicketDescription'
import ProjectTicketComments from './ProjectTicketComments'

import projectsData from '../../data/contributorsData'
import ticketsData from '../../data/ticketsData'
import commentsData from '../../data/commentsData'

const { v4: uuidv4 } = require('uuid');

const ProjectBoard = () => {
  
  const [open, setOpen] = useState(false)
  const [projects, setProjects] = useState(projectsData)
  const [tickets, setTickets] = useState(ticketsData)
  const [ticketForDescription, setTicketForDescription] = useState(tickets[0])
  const [comments, setComments] = useState(commentsData)
  const [newComment, setNewComment] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newAuthor, setNewAuthor] = useState("")
  const [newStatus, setNewStatus] = useState("")
  const [newPriority, setNewPriority] = useState("")
  const [newType, setNewType] = useState("")
  const [newETA, setNewETA] = useState("")
  

  const toggleAddTicketModal = () => {
    setOpen(prev => !prev)
  }
  
  const handleCancel = () => {
    toggleAddTicketModal()
  }

  const dateConversion = () => {
    let date = new Date();
    let dateToString = date.toString()
    let slicedDate = dateToString.slice(0,-24)
    return(slicedDate)
  }
  
  const commentChange = (e) => {
    setNewComment(e.target.value)
  }
  
  const titleChange = (e) => {
    setNewTitle(e.target.value)
  }
  
  const descriptionChange = (e) => {
    setNewDescription(e.target.value)
  }
  
  const authorChange = (e) => {
    setNewAuthor(e.target.value)
  }

  const addNewTicket = (e) => {
    e.preventDefault()
    const newTicket = {
      title: newTitle,
      description: newDescription,
      author: newAuthor,
      status: newStatus,
      priority: newPriority,
      type: newType,
      ETA: newETA,
      id: uuidv4()
    }
    setTickets([...tickets, newTicket])
    // PLACE TO SEE IF THE ONCHANGE ANONYMOUS FUNCTION SET STATE OR NOT
    setNewTitle("")
    setNewDescription("")
    setNewAuthor("")
    setNewStatus("")
    setNewPriority("")
    setNewType("")
    setNewETA("")
    toggleAddTicketModal()
  }
  
  const addNewComment = (e) => {
    e.preventDefault()
    const newTicketComment = {
      comment: newComment,
      author: "Jason", // the author would be the person who is logged in
      date: dateConversion(),
      id: uuidv4,
    }
    setComments([...comments, newTicketComment])
  }
  
  const handleTicketClick = (e, id) => {
    const newTicket = tickets.filter(ticket => ticket.id === id)
    let newTicketForDescription = newTicket[0]
    setTicketForDescription(newTicketForDescription)
    let newComment = tickets.filter(ticket => ticket.id === id)
    let newComments = newComment[0]
    setComments(newComments.comments)
  }
  
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
                value={newTitle}
                onChange={titleChange}
                required
              />
              <label htmlFor="description">Description: </label>
              <input 
                type="text" 
                id="description" 
                name="description" 
                value={newDescription} 
                onChange={descriptionChange}
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
                value={newAuthor}
                onChange={authorChange}
                required
              />
              
              <label htmlFor="status">Status: </label>
              <select name="status" onChange={(e) => {
                const newStatus = e.target.value
                setNewStatus(newStatus)
              }}>
                <option value="">select status</option>
                <option value="open">open</option>
                <option value="closed">closed</option>
              </select>
              
              <label htmlFor="priority">Priority: </label>
              <select name="priority" onChange={(e) => {
                const newPriority = e.target.value
                setNewPriority(newPriority)
              }}>
                <option value="">select priority</option>
                <option value="low">low</option>
                <option value="normal">normal</option>
                <option value="important">important</option>
                <option value="critical">critical</option>
              </select>
              
              <label htmlFor="type">Type: </label>
              <select name="type" onChange={(e) => {
                const newType = e.target.value
                setNewType(newType)
              }}>
                <option value="">select type</option>
                <option value="bug">bug</option>
                <option value="feature">feature</option>
                <option value="issue">issue</option>
              </select> 
              
              <label htmlFor="eta">ETA: </label>
              <select name="eta" onChange={(e) => {
                const newETA = e.target.value
                setNewETA(newETA)
              }}>
                <option value="">select time due</option>
                <option value="one day">one day</option>
                <option value="one week">one week</option>
                <option value="one month">one month</option>
                <option value="one quarter">one quarter</option>
              </select> 
              {/* OLD CODE FOR CONSIDERATION IF SELECT DOESN'T WORK
              <input 
                type="text" 
                id="eta" 
                name="eta" 
                value={newETA}
                onChange={etaChange}
                required
              />
              */}
              <div className="projectboard-ticket-modal-btns">
                <button className="submit-modalBtn" type="submit">Submit</button>
                <button className="cancel-modalBtn" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </section>
        }
        
        <div className={open ? "grayed-out" : undefined}>
        
          <div className="projectboard-team-and-tickets">
            <ProjectTeam
              data={projects}
            />
            <ProjectTicketDescription 
              ticketForDescription={ticketForDescription}
            />
          </div>
          <div className="projectboard-desc-and-comments">
            <ProjectTickets 
              tickets={tickets}
              handleCancel={handleCancel}
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