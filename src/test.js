import { useState } from 'react'

import data from './data/project-data'

const Test = () => {

  const [projects, setProjects] = useState(data)
  const [tickets, setTickets] = useState(data)

  return (
    <>
      {
        projects?.map((el) => (
            <div>
              <h3>{el.projectTitle}</h3>
              <h3>{el.description}</h3>
            </div>
        ))
      }
    </>
  );
}

export default Test;