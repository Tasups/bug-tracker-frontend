import React from 'react';
import BugReportIcon from '@mui/icons-material/BugReport';

import { Link } from 'react-router-dom'

const SideNav = () => {
  return(
    <nav className="sidenav-container">
      <div className="sidenav-icon">
        <BugReportIcon sx={{ fontSize: "3rem" }}/>
        <h3>Bug Bank</h3>
      </div>
      <div className="sidenav-menu">
        <ul>
          <li>
            <Link to="/dashboard" className="sidenav-navbtn">Dashboard</Link>
          </li>
          <li className="sidenav-navbtn">Tickets</li>
          <li className="sidenav-navbtn">
          <Link to="/admin" className="sidenav-navbtn">Admin</Link>
          </li>
        </ul>
      </div>
      <div className="sidenav-button">
          <button>
            <Link to="/" className="sidenav-linkbtn">Log Out</Link>
          </button>
      </div>
      <div className="copyright">
        <p>&copy; 2022 Jason Whisnant</p>
      </div>
    </nav>
    )
}

export default SideNav;