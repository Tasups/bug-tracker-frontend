import { useState } from 'react'

const { v4: uuidv4 } = require('uuid');

import SideNav from '../SideNav'
import ProjectHeader from './ProjectHeader'
import ProjectTeam from './ProjectTeam'
import ProjectTickets from './ProjectTickets'
import ProjectTicketDescription from './ProjectTicketDescription'
import ProjectTicketComments from './ProjectTicketComments'

import projectsData from '../../data/projectsData'
import ticketsData from '../../data/ticketsData'
import commentsData from '../../data/commentsData'


const ProjectBoard = () => {
  
  const [projects, setProjects] = useState(projectsData)
  const [tickets, setTickets] = useState(ticketsData)
  const [comments, setComments] = useState(commentsData)
  const [newComment, setNewComment] = useState("")
  
  const dateConversion = () => {
    let date = new Date();
    let dateToString = date.toString()
    let slicedDate = dateToString.slice(0,-24)
    return(slicedDate)
  }
  
  const commentChange = (e) => {
    setNewComment(e.target.value)
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
        <div className="projectboard-team-and-tickets">
          <ProjectTeam
            data={projects}
          />
          <ProjectTicketDescription />
        </div>
        <div className="projectboard-desc-and-comments">
          <ProjectTickets 
            tickets={tickets}
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