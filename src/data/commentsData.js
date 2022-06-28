const { v4: uuidv4 } = require('uuid');

const commentsData = [
  {
    comment: "This is something to consider upping in the priority level. It needs to be at least important.",
    id: uuidv4(),
    author: "Ironhorse Johnson",
    date: "June 22nd, 2022"
  },
  {
    comment: "Why not consider moving this to its own project as we could consider it being componentized and used over and over again.",
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

export default commentsData