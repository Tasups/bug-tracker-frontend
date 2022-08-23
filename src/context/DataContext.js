import { createContext, useState, useEffect } from 'react'
import { issues } from '../data/projectData';
import contributorsData from '../data/contributorsData'
import ticketsData from '../data/ticketsData'

const { v4: uuidv4 } = require('uuid');

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  // DASHBOARD STATES ----------------------------------------------

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(issues);
  const [newProjTitle, setNewProjTitle] = useState("");
  const [newProjDescription, setNewProjDescription] = useState("");
  const [newProjContributors, setNewProjContributors] = useState("");
  const [data, setData] = useState({});

  // PROJECTBOARD STATES -------------------------------------------

  // eslint-disable-next-line
  const [contributors, setContributors] = useState(contributorsData);
  const [tickets, setTickets] = useState(ticketsData);
  const [ticketForDescription, setTicketForDescription] = useState(tickets[0]);
  const [comments, setComments] = useState(ticketsData[0].comments);
  const [newComment, setNewComment] = useState("");
  const [newTicketTitle, setNewTicketTitle] = useState("");
  const [newTicketDesc, setNewTicketDesc] = useState("");
  const [newTicketAuthor, setNewTicketAuthor] = useState("");
  const [newTicketStatus, setNewTicketStatus] = useState("");
  const [newTicketPriority, setNewTicketPriority] = useState("");
  const [newTicketType, setNewTicketType] = useState("");
  const [newTicketETA, setNewTicketETA] = useState("");
  const [parentID, setParentID] = useState("");

  useEffect(() => {
    setProjects(issues);
  }, []);

  // DASHBOARD FUNCTIONS -------------------------------------------

  const toggleAddProjectModal = () => {
    setOpen((prev) => !prev);
  };

  const projectChange = (e) => {
    setNewProjTitle(e.target.value);
  };

  const projDescChange = (e) => {
    setNewProjDescription(e.target.value);
  };

  const projContributorsChange = (e) => {
    setNewProjContributors(e.target.value);
  };

  const addNewProject = (e) => {
    e.preventDefault();
    const newProject = {
      key: newProjTitle,
      projectTitle: newProjTitle,
      description: newProjDescription,
      contributors: newProjContributors,
    };
    setProjects([...projects, newProject]);
    setNewProjTitle("");
    setNewProjDescription("");
    setNewProjContributors("");
    toggleAddProjectModal();
  };

  const handleProjCancel = () => {
    setNewProjTitle("");
    setNewProjDescription("");
    setNewProjContributors("");
    toggleAddProjectModal();
  };

  const handleProjSubmit = (e) => {
    e.preventDefault();
    addNewProject(e);
  };

  // PROJECTBOARD FUNCTIONS ----------------------------------------

  const toggleAddTicketModal = () => {
    setOpen((prev) => !prev);
  };

  const handleTicketCancel = () => {
    toggleAddTicketModal();
  };

  const dateConversion = () => {
    let date = new Date();
    let dateToString = date.toString();
    let slicedDate = dateToString.slice(0, -24);
    return slicedDate;
  };

  const commentChange = (e) => {
    setNewComment(e.target.value);
  };

  const ticketTitleChange = (e) => {
    setNewTicketTitle(e.target.value);
  };

  const ticketDescChange = (e) => {
    setNewTicketDesc(e.target.value);
  };

  const ticketAuthorChange = (e) => {
    setNewTicketAuthor(e.target.value);
  };

  const ticketStatusChange = (e) => {
    const newStatus = e.target.value;
    setNewTicketStatus(newStatus);
  };

  const ticketPriorityChange = (e) => {
    const newPriority = e.target.value;
    setNewTicketPriority(newPriority);
  };

  const ticketTypeChange = (e) => {
    const newType = e.target.value;
    setNewTicketType(newType);
  };

  const ticketETAChange = (e) => {
    const newETA = e.target.value;
    setNewTicketETA(newETA);
  };

  const addNewTicket = (e) => {
    e.preventDefault();
    const newTicket = {
      title: newTicketTitle,
      description: newTicketDesc,
      author: newTicketAuthor,
      status: newTicketStatus,
      priority: newTicketPriority,
      type: newTicketType,
      eta: newTicketETA,
      id: uuidv4(),
      comments: [
        {
          comment: "Please make comments to describe the ticket",
          id: uuidv4(),
          author: "Jason Whisnant",
          date: dateConversion(),
        },
      ],
    };
    setTickets([...tickets, newTicket]);
    setNewTicketTitle("");
    setNewTicketDesc("");
    setNewTicketAuthor("");
    setNewTicketStatus("");
    setNewTicketPriority("");
    setNewTicketType("");
    setNewTicketETA("");
    toggleAddTicketModal();
  };

  const addNewComment = (e) => {
    e.preventDefault();
    const newTicketComment = {
      comment: newComment,
      author: "Jason Whisnant", // the author would be the person who is logged in
      date: dateConversion(),
      id: uuidv4(),
    };
    if (newComment.length <= 0) {
      return;
    } else if (newComment.length > 0) {
      setComments([...comments, newTicketComment]);
      setNewComment("");
    }
    // eslint-disable-next-line
    const ticketToUpdate = tickets.filter((ticket) => ticket.id === parentID);
    // eslint-disable-next-line
    const updatedTicket = ticketToUpdate[0].comments.push(newTicketComment);
    //setTickets([...tickets, updatedTicket]);
  };

  const handleTicketClick = (e, id) => {
    e.preventDefault();
    const newTicket = tickets.filter((ticket) => ticket.id === id);
    let newTicketForDescription = newTicket[0];
    setTicketForDescription(newTicketForDescription);
    let newComment = tickets.filter((ticket) => ticket.id === id);
    let newComments = newComment[0];
    setComments(newComments.comments);
    setParentID(id);
  };
  
  // ADMIN FUNCTIONS -----------------------------------------------
  
  const deleteContributor = (e, id) => {
    e.preventDefault()
    const newContributorsList = contributors.filter((contributor => contributor.id !== id))
    setContributors(newContributorsList)
  }

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        projects,
        open,
        setOpen,
        handleProjCancel,
        handleProjSubmit,
        toggleAddProjectModal,
        projectChange,
        projDescChange,
        projContributorsChange,
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
        addNewTicket,
        addNewComment,
        handleTicketClick,
        ticketStatusChange,
        ticketPriorityChange,
        ticketTypeChange,
        ticketETAChange,
        deleteContributor
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;