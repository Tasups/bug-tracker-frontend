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
  
  const [openAddContributor, setOpenAddContributor] = useState(false)
  const [openEditContributor, setOpenEditContributor] =useState(false)
  const [newContributorName, setNewContributorName] = useState("");
  const [newContributorEmail, setNewContributorEmail] = useState("");
  const [newContributorPhone, setNewContributorPhone] = useState("");
  const [newContributorRole, setNewContributorRole] = useState("");
  
  const contributorNameChange = (e) => {
    setNewContributorName(e.target.value);
  };

  const contributorEmailChange = (e) => {
    setNewContributorEmail(e.target.value);
  };

  const contributorPhoneChange = (e) => {
    setNewContributorPhone(e.target.value);
  };

  const contributorRoleChange = (e) => {
    const newStatus = e.target.value;
    setNewContributorRole(newStatus);
  };
  
  const toggleAddContributor = () => {
    setOpenAddContributor((prev) => !prev);
  };
  
  const toggleEditContributor = () => {
    setOpenEditContributor((prev) => !prev)
  }
  
  const deleteContributor = (id) => {
    const newContributorsList = contributors.filter((contributor) => contributor.id !== id)
    setContributors(newContributorsList)
  }
  
/*  
  const editTask = (id, newTitle, newDesc) => {
    const editedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, title: newTitle, desc: newDesc }
      } 
      return task;
    })
    setTasks(editedTasks);
  }
  */
  // const editContributor = (id) => {
  //   //this will be an array except for the object that has the id
  // const uneditedContributorList = contributors.filter((contributor) => contributor.id !== id)
  // // the object that is to be edited
  // let contributorToBeEdited = contributors.filter((contributor) => contributor.id === id)
  // contributorToBeEdited = {
  //   ...contributorToBeEdited, name: newContributorName, email: newContributorEmail, phone: newContributorPhone, role: newContributorRole
  // }
  // const editedContributorList = uneditedContributorList.push(contributorToBeEdited)
  // setContributors(editedContributorList)
  // toggleEditContributor()
  // }
  

  const editContributor = (e, id) => {
    e.preventDefault()
    const editedContributors = contributors.map(contributor => {
      if (id === contributor.id) {
        return { ...contributor, name: newContributorName, email: newContributorEmail, phone: newContributorPhone, role: newContributorRole
        }
      } return contributor
      })
    setContributors(editedContributors)
    toggleEditContributor()
  }
  
  const addNewContributor = (e) => {
    e.preventDefault();
    const newContributor = {
      name: newContributorName,
      email: newContributorEmail,
      phone: newContributorPhone,
      role: newContributorRole,
    };
    setContributors([...contributors, newContributor]);
    setNewContributorName("");
    setNewContributorEmail("");
    setNewContributorPhone("");
    setNewContributorRole("");
    toggleAddContributor();
  };
  
  const addNewContributorCancel = () => {
    setNewContributorName("");
    setNewContributorEmail("");
    setNewContributorPhone("");
    setNewContributorRole("");
    toggleAddContributor();
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
        deleteContributor,
        newContributorName,
        newContributorEmail,
        newContributorPhone,
        newContributorRole,
        contributorNameChange,
        contributorEmailChange,
        contributorPhoneChange,
        contributorRoleChange,
        addNewContributor,
        editContributor,
        openAddContributor,
        openEditContributor,
        toggleAddContributor,
        toggleEditContributor,
        addNewContributorCancel
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;

// useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks))
//   }, [tasks])