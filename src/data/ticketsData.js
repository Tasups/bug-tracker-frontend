const { v4: uuidv4 } = require('uuid');

// priority low, normal, important, critical

const ticketsData = [
  {
    title: "ticket comments",
    description:
      "it is a card that will display the entirety of the ticket description",
    author: "Don Quixote",
    id: uuidv4(),
    status: "closed",
    priority: "low",
    type: "bug",
    eta: "one quarter",
    comments: [
  {
    comment: "This is the first comment, my friend",
    id: uuidv4(),
    author: "Ironhorse Johnson",
    date: "June 22nd, 2022"
  },
  {
    comment: "This is another comment, my friend the surfer.",
    id: uuidv4(), 
    author: "Ada Lovelace",
    date: "June 13th, 2000"
  },
  {
    comment: "It seems that the comments are working well in this system.",
    id: uuidv4(),
    author: "William Riker",
    date: "May 31st, 2022"
  },
  {
    comment: "there are only five or six different issues on the system.",
    id: uuidv4(),
    author: "Santa Claus",
    date: "January 1st, 2022"
  },
  {
    comment: "Going to consider a situation with a greater outcomes to the situation that we have to work with on this system.",
    id: uuidv4(),
    author: "Alan Turing",
    date: "March 4th, 2022"
  },
  ]
  },
  {
    title: "ticket data",
    description:
      "fake it until you make it, which is essentially building and connecting the backend and the database. So yeah, actually doing it.",
    author: "Ada Lovelace",
    id: uuidv4(),
    status: "open",
    priority: "normal",
    type: "feature",
    eta: "one month",
    comments: [
  {
    comment: "This is the first comment of the ticket 'ticket data'",
    id: uuidv4(),
    author: "Ironhorse Johnson",
    date: "June 22nd, 2022"
  },
  {
    comment: "This is another comment, my butthole surfer.",
    id: uuidv4(), 
    author: "Ada Lovelace",
    date: "June 13th, 2000"
  },
  {
    comment: "It seems that the comments are working well in this system.",
    id: uuidv4(),
    author: "William Riker",
    date: "May 31st, 2022"
  },
  {
    comment: "there are only five or six different issues on the system.",
    id: uuidv4(),
    author: "Santa Claus",
    date: "January 1st, 2022"
  },
  {
    comment: "Going to consider a situation with a greater outcomes to the situation that we have to work with on this system.",
    id: uuidv4(),
    author: "Alan Turing",
    date: "March 4th, 2022"
  },
  ]
  },
  {
    title: "authentication",
    description:
      "auth context and functionality with conditional rendering of some ui and functional components",
    author: "Alan Turing",
    id: uuidv4(),
    status: "open",
    priority: "critical",
    type: "feature",
    eta: "one week",
    comments: [
  {
    comment: "This is the first comment of the ticket 'authentication'",
    id: uuidv4(),
    author: "Ironhorse Johnson",
    date: "June 22nd, 2022"
  },
  {
    comment: "This is another comment, my butthole surfer.",
    id: uuidv4(), 
    author: "Ada Lovelace",
    date: "June 13th, 2000"
  },
  {
    comment: "It seems that the comments are working well in this system.",
    id: uuidv4(),
    author: "William Riker",
    date: "May 31st, 2022"
  },
  {
    comment: "there are only five or six different issues on the system.",
    id: uuidv4(),
    author: "Santa Claus",
    date: "January 1st, 2022"
  },
  {
    comment: "Going to consider a situation with a greater outcomes to the situation that we have to work with on this system.",
    id: uuidv4(),
    author: "Alan Turing",
    date: "March 4th, 2022"
  },
  ]
  },
  {
    title: "more component pages?",
    description:
      "consider making some a page for the projects to pick from to render the tickets, team, etc.",
    author: "Ada Lovelace",
    id: uuidv4(),
    status: "open",
    priority: "low",
    type: "bug",
    eta: "one day",
    comments: [
  {
    comment: "This is the first comment of the ticket 'more component pages?'",
    id: uuidv4(),
    author: "Ironhorse Johnson",
    date: "June 22nd, 2022"
  },
  {
    comment: "This is another comment, my butthole surfer.",
    id: uuidv4(), 
    author: "Ada Lovelace",
    date: "June 13th, 2000"
  },
  {
    comment: "It seems that the comments are working well in this system.",
    id: uuidv4(),
    author: "William Riker",
    date: "May 31st, 2022"
  },
  {
    comment: "there are only five or six different issues on the system.",
    id: uuidv4(),
    author: "Santa Claus",
    date: "January 1st, 2022"
  },
  {
    comment: "Going to consider a situation with a greater outcomes to the situation that we have to work with on this system.",
    id: uuidv4(),
    author: "Alan Turing",
    date: "March 4th, 2022"
  },
  ]
  },
  {
    title: "styling questions",
    description: "consider hiring a UI/UX person to consider changes?",
    author: "Miss Monique",
    id: uuidv4(),
    status: "open",
    priority: "low",
    type: "feature",
    eta: "one month",
    comments: [
  {
    comment: "This is the first comment of the ticket 'styling questions'",
    id: uuidv4(),
    author: "Ironhorse Johnson",
    date: "June 22nd, 2022"
  },
  {
    comment: "This is another comment, my butthole surfer.",
    id: uuidv4(), 
    author: "Ada Lovelace",
    date: "June 13th, 2000"
  },
  {
    comment: "It seems that the comments are working well in this system.",
    id: uuidv4(),
    author: "William Riker",
    date: "May 31st, 2022"
  },
  {
    comment: "there are only five or six different issues on the system.",
    id: uuidv4(),
    author: "Santa Claus",
    date: "January 1st, 2022"
  },
  {
    comment: "Going to consider a situation with a greater outcomes to the situation that we have to work with on this system.",
    id: uuidv4(),
    author: "Alan Turing",
    date: "March 4th, 2022"
  },
  ]
  },
  {
    title: "deployment",
    description: "will netlify work for this? If not, consider firebase?",
    author: "Duncan McLeod",
    id: uuidv4(),
    status: "open",
    priority: "low",
    type: "bug",
    eta: "one month",
    comments: [
  {
    comment: "This is the first comment of the ticket 'deployment'",
    id: uuidv4(),
    author: "Ironhorse Johnson",
    date: "June 22nd, 2022"
  },
  {
    comment: "This is another comment, my butthole surfer.",
    id: uuidv4(), 
    author: "Ada Lovelace",
    date: "June 13th, 2000"
  },
  {
    comment: "It seems that the comments are working well in this system.",
    id: uuidv4(),
    author: "William Riker",
    date: "May 31st, 2022"
  },
  {
    comment: "there are only five or six different issues on the system.",
    id: uuidv4(),
    author: "Santa Claus",
    date: "January 1st, 2022"
  },
  {
    comment: "Going to consider a situation with a greater outcomes to the situation that we have to work with on this system.",
    id: uuidv4(),
    author: "Alan Turing",
    date: "March 4th, 2022"
  },
  ]
  },
];
  
  export default ticketsData