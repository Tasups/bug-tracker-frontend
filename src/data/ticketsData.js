const { v4: uuidv4 } = require('uuid');

// priority low, normal, important, critical

const ticketsData = [
  {
    title: "ticket comments",
    description: "it is a card that will display the entirety of the ticket description",
    author: "Jason Whisnant",
    id: uuidv4(),
    status: "open",
    priority: "low",
    type: "bug",
    eta: "one quarter"
  },
  {
    title: "ticket data",
    description: "fake it until you make it, which is essentially building and connecting the backend and the database",
    author: "Ada Lovelace",
    id: uuidv4(),
    status: "open",
    priority: "normal",
    type: "feature",
    eta: "one month"
  },
  {
    title: "ticket data",
    description: "fake it until you make it, which is essentially building and connecting the backend and the database",
    author: "Ada Lovelace",
    id: uuidv4(),
    status: "open",
    priority: "important",
    type: "feature",
    eta: "one week"
  },
  {
    title: "ticket data",
    description: "fake it until you make it, which is essentially building and connecting the backend and the database",
    author: "Ada Lovelace",
    id: uuidv4(),
    status: "open",
    priority: "critical",
    type: "bug",
    eta: "one day"
  },
  {
    title: "ticket data",
    description: "fake it until you make it, which is essentially building and connecting the backend and the database",
    author: "Ada Lovelace",
    id: uuidv4(),
    status: "open",
    priority: "low",
    type: "feature",
    eta: "one month"
  },
  {
    title: "ticket data",
    description: "fake it until you make it, which is essentially building and connecting the backend and the database",
    author: "Ada Lovelace",
    id: uuidv4(),
    status: "closed",
    priority: "low",
    type: "bug",
    eta: "one month"
  },
  ]
  
  export default ticketsData