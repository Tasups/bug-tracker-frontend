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
  
  const statusChange = (e) => {
    setNewStatus(e.target.value)
  }
  
  const priorityChange = (e) => {
    setNewPriority(e.target.value)
  }
  
  const typeChange = (e) => {
    setNewType(e.target.value)
  }
  
  const etaChange = (e) => {
    setNewETA(e.target.value)
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
      author: "Jason", // the author would be the person who is logged in (as a default)
      date: dateConversion(),
      id: uuidv4,
    }
    setComments([...comments, newTicketComment])
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
              <select name="status" id="status-select">
                <option value="">select status</option>
                <option value="open">open</option>
                <option value="closed">closed</option>
              </select>
              
              <label htmlFor="priority">Priority: </label>
              <select name="priority" id="priority-select">
                <option value="">select priority</option>
                <option value="low">low</option>
                <option value="normal">normal</option>
                <option value="important">important</option>
                <option value="critical">critical</option>
              </select>
              
              <label htmlFor="type">Type: </label>
              <select name="priority" id="priority-select">
                <option value="">select type</option>
                <option value="bug">bug</option>
                <option value="feature">feature</option>
                <option value="issue">issue</option>
              </select> 
              
              <label htmlFor="eta">ETA: </label>
              <select name="eta" id="eta-select">
                <option value="one day">one day</option>
                <option value="one week">one week</option>
                <option value="one month">one month</option>
                <option value="one quarter">one quarter</option>
              </select> 
              {/*
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
            <ProjectTicketDescription />
          </div>
          <div className="projectboard-desc-and-comments">
            <ProjectTickets 
              tickets={tickets}
              titleChange={titleChange}
              newTitle={newTitle}
              descriptionChange={descriptionChange}
              newDescription={newDescription}
              authorChange={authorChange}
              newAuthor={newAuthor}
              addNewTicket={addNewTicket}
              open={open}
              setOpen={setOpen}
              handleCancel={handleCancel}
              toggleAddTicketModal={toggleAddTicketModal}
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