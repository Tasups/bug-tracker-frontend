import { useContext } from 'react'
import DataContext from '../../context/DataContext'

import ProjectHeader from '../projectBoard/ProjectHeader'
import SideNav from '../SideNav'
import Personnel from './Personnel'

const Admin = () => {
  
  const {
    contributors,
    deleteContributor,
    newContributorName,
    newContributorEmail,
    newContributorPhone,
    newContributorRole,
    contributorNameChange,
    contributorEmailChange,
    contributorPhoneChange,
    contributorRoleChange,
    addNewContributor
  } = useContext(DataContext)
  
  return(
    <>
      <ProjectHeader />
      <SideNav />
      <div className="admin-container">
        <Personnel 
          contributors={contributors}
          deleteContributor={deleteContributor}
          newContributorName={newContributorName}
          newContributorEmail={newContributorEmail}
          newContributorPhone={newContributorPhone}
          newContributorRole={newContributorRole}
          contributorNameChange={contributorNameChange}
          contributorEmailChange={contributorEmailChange}
          contributorPhoneChange={contributorPhoneChange}
          contributorRoleChange={contributorRoleChange}
          addNewContributor={addNewContributor}
        />
      </div>
     
    </>
    
    )
}

export default Admin