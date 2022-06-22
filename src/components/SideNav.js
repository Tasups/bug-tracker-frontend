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
          <li>Dashboard</li>
          <li>Tickets</li>
          <li>Administration</li>
        </ul>
      </div>
      <div className="sidenav-button">
          <button>Log Out</button>
      </div>
      <div className="test-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/projectboard">ProjectBoard</Link>
      </div>
      <div className="copyright">
        <p>&copy; 2022 Jason Whisnant</p>
      </div>
    </nav>
    )
}

export default SideNav;