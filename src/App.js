import { Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import Dashboard from './components/dashboard/Dashboard'
import ProjectBoard from './components/projectBoard/ProjectBoard'
import TicketsBoard from './components/ticketsboard/TicketsBoard'
import Admin from './components/admin/Admin'
import SignUp from './components/signup/SignUp'
import SignIn from './components/SignIn'

import './App.css'

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* to={`http://localhost:3000/api/v1/projects/dashboard/${project._id}`}*/}
        <Route path="/projectboard" element={<ProjectBoard />} exact />
        <Route path="/ticketsboard" element={<TicketsBoard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

// import data from './data/fakedata.json'
// to be used when the backend is established
//import BACKEND_API from '.data/data'

  
  // // will need to change to BACKEND_API when ready
  // useEffect(() => {
  //   setIssues(data)
  // }, [data])