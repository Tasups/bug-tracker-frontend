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
  },
];
  
  export default ticketsData