import { Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import Dashboard from './components/dashboard/Dashboard'
import ProjectBoard from './components/projectBoard/ProjectBoard'
import SignUp from './components/signup/SignUp'
import SignIn from './components/SignIn'

import './App.css'

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projectboard" element={<ProjectBoard />} />
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