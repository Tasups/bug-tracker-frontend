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
  } = useContext(DataContext)
  
  return(
    <>
      <ProjectHeader />
      <SideNav />
      
      {
        openAddContributor && 
        <section className="dashboard-project-modal">
            <h2>Add A New Contributor</h2>
            <form onSubmit={addNewContributor} autoComplete="off">
              <label htmlFor="contributor-name">Contributor's Name: </label>
              <input
                type="text"
                id="contributor-name"
                name="conttributor-name"
                value={newContributorName}
                onChange={contributorNameChange}
                required
              />
              <label htmlFor="contributor-email">Contributor's Email: </label>
              <input
                type="email"
                id="contributor-email"
                name="contributor-email"
                value={newContributorEmail}
                onChange={contributorEmailChange}
                required
              />
              <label htmlFor="contributor-phone">Contributors's Phone Number: </label>
              <input
                type="tel"
                id="contributor-phone"
                name="contributor-phone"
                value={newContributorPhone}
                onChange={contributorPhoneChange}
                required
                style={{marginBottom: "0.5rem"}}
              />
              <label htmlFor="contributor-role">Contributor's Role: </label>
              <select 
                name="contributor-role" 
                onChange={contributorRoleChange}
                className="contributor-role"
              >
                <option value="">select contributor role</option>
                <option value="administrator">Administrator</option>
                <option value="developer">Developer</option>
              </select>
              <div className="dashboard-project-modal-btns">
                <button className="submit-modalBtn" type="submit">
                  Submit
                </button>
                <button className="cancel-modalBtn" onClick={addNewContributorCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </section>
      }
      
      {
        openEditContributor && 
        <h1>OPEN EDIT CONTRIBUTOR MODAL HERE</h1>
      }
      
      <div className="admin-container">
        <Personnel 
          contributors={contributors}
          deleteContributor={deleteContributor}
          toggleAddContributor={toggleAddContributor}
          toggleEditContributor={toggleEditContributor}
        />
      </div>
     
    </>
    
    )
}

export default Admin