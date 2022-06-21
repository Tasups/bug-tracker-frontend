import { Link } from 'react-router-dom'


import './App.css'
// import data from './data/fakedata.json'
// to be used when the backend is established
//import BACKEND_API from '.data/data'


function App() {
  
  // // will need to change to BACKEND_API when ready
  // useEffect(() => {
  //   setIssues(data)
  // }, [])
  
  return (
    <div className="auth-container">
      <div className="auth-title">
        <h1>Bug_Bank</h1>
        <h4>Sign In or Sign Up</h4>
      </div>
      <div className="auth-card">
        <h2>Sign In</h2>
        <form>
            <label htmlFor="email" hidden="hidden">Email: </label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="email"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <label htmlFor="password" hidden="hidden">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <button>Submit</button>
        </form>
        <div className="auth-card-signup">
          <p>Can't sign in? <Link to="/signup">Sign up.</Link></p>
        </div>
        <div className="auth-card-footer">
          <Link className="auth-card-links" to="/dashboard">Dashboard</Link>
          <Link className="auth-card-links" to="/projectboard">ProjectBoard</Link>
        </div>
          <p>&copy; 2022 Jason Whisnant</p>
      </div>
        
    </div>
    
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="0.9" d="M0,128L480,96L960,192L1440,224L1440,320L960,320L480,320L0,320Z"></path></svg>
  );
}

export default App;
