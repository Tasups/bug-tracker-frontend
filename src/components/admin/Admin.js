import { useContext } from 'react'
import DataContext from '../../context/DataContext'

import ProjectHeader from '../projectBoard/ProjectHeader'
import SideNav from '../SideNav'
import Personnel from './Personnel'

const Admin = () => {
  
  const {
    contributors,
    deleteContributor
  } = useContext(DataContext)
  
  return(
    <>
      <ProjectHeader />
      <SideNav />
      <div className="admin-container">
        <Personnel 
          contributors={contributors}
          deleteContributor={deleteContributor}
        />
      </div>
     
    </>
    
    )
}

export default Admin