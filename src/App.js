import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import ProjectBoard from './components/projectBoard/ProjectBoard'
import TicketsBoard from './components/ticketsboard/TicketsBoard'
import SignUp from './components/signup/SignUp'
import SignIn from './components/SignIn'

import projectsData from './data/contributorsData'
import ticketsData from './data/ticketsData'

import './App.css'

const { v4: uuidv4 } = require('uuid');

  
function App() {
  
  //******************* FROM DASHBOARD
  
  //const [projects, setProjects] = useState(issues);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  //const [newDescription, setNewDescription] = useState("");
  const [newContributors, setNewContributors] = useState("");
  
  const toggleAddProjectModal = () => {
    setOpen((prev) => !prev);
  };

  const projectChange = (e) => {
    setNewProjectTitle(e.target.value);
  };

  const descriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const contributorsChange = (e) => {
    setNewContributors(e.target.value);
  };

  const addNewProject = (e) => {
    e.preventDefault();
    const newProject = {
      key: newProjectTitle,
      projectTitle: newProjectTitle,
      description: newDescription,
      contributors: newContributors,
    };
    setProjects([...projects, newProject]);
    setNewProjectTitle("");
    setNewDescription("");
    setNewContributors("");
    toggleAddProjectModal();
  };

  const handleCancel = () => {
    setNewProjectTitle("");
    setNewDescription("");
    setNewContributors("");
    toggleAddProjectModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProject(e);
  };


  //******************* FROM PROJECTBOARD
    // eslint-disable-next-line
  
  const [projects, setProjects] = useState(projectsData)
  const [tickets, setTickets] = useState(ticketsData)
  const [ticketForDescription, setTicketForDescription] = useState(tickets[0])
  const [comments, setComments] = useState(ticketsData[0].comments)
  const [newComment, setNewComment] = useState("")
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newAuthor, setNewAuthor] = useState("")
  const [newStatus, setNewStatus] = useState("")
  const [newPriority, setNewPriority] = useState("")
  const [newType, setNewType] = useState("")
  const [newETA, setNewETA] = useState("")
  const [parentID, setParentID] = useState("")
  
  const addNewTicket = (e) => {
    e.preventDefault()
    const newTicket = {
      title: newTitle,
      description: newDescription,
      author: newAuthor,
      status: newStatus,
      priority: newPriority,
      type: newType,
      eta: newETA,
      id: uuidv4(),
      comments: 
      [
        {
          comment: "Please make comments to describe the ticket",
          id: uuidv4(),
          author: "Jason Whisnant",
          date: dateConversion()
        }
      ]
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
      author: "Jason Whisnant", // the author would be the person who is logged in
      date: dateConversion(),
      id: uuidv4(),
    }
    setComments([...comments, newTicketComment])
    setNewComment("");
    // eslint-disable-next-line
    const ticketToUpdate = tickets.filter((ticket) => ticket.id === parentID);
    // eslint-disable-next-line
    const updatedTicket = ticketToUpdate[0].comments.push(newTicketComment);
    //setTickets([...tickets, updatedTicket]);
  }

  const handleTicketClick = (e, id) => {
    e.preventDefault()
    const newTicket = tickets.filter(ticket => ticket.id === id)
    let newTicketForDescription = newTicket[0]
    setTicketForDescription(newTicketForDescription)
    let newComment = tickets.filter(ticket => ticket.id === id)
    let newComments = newComment[0]
    setComments(newComments.comments)
    setParentID(id)
  }

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projectboard" element={<ProjectBoard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/ticketsboard" element={<TicketsBoard />} />
    </Routes>
  );
}

export default App;

// import data from './data/fakedata.json'
// to be used when the backend is established
//import BACKEND_API from '.data/data'

  
  // // will need to change to BACKEND_API when ready
  // useEffect(() => {
  //   setIssues(data)
  // }, [data])