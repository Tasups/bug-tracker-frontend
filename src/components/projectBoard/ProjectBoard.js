import { useState } from 'react'

import SideNav from '../SideNav'
import ProjectHeader from './ProjectHeader'
import ProjectTeam from './ProjectTeam'
import ProjectTickets from './ProjectTickets'
import ProjectTicketDescription from './ProjectTicketDescription'
import ProjectTicketComments from './ProjectTicketComments'

import projectsData from '../../data/projectsData'
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
      id: uuidv4()
    }
    setTickets([...tickets, newTicket])
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
  
  //className={open ? "grayed-out" : undefined}
      //"projectboard-container" `${open ? "grayed-out" : undefined}`
  
  return(
    <>
      <ProjectHeader />
      <SideNav />
      
      <div className="projectboard-container">
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
    </>
    )
}

export default ProjectBoard;