import { Link } from 'react-router-dom'


const SignUp = () => {

  return (
    <div className="signup-container">
      <div className="signup-title">
        <h1>Bug_Bank</h1>
        <h4>Register</h4>
      </div>
      <div className="signup-card">
        <h3>Sign Up</h3>
        <form>
            <label htmlFor="first-name">First Name: </label>
            <input 
              type="text"
              id="first-name"
              name="first-name"
              // value={firstName}
              // onChange={firstNameChange}
              required
            />
            <label htmlFor="last-name">Last Name: </label>
            <input 
              type="text"
              id="last-name"
              name="last-name"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <label htmlFor="email">Email: </label>
            <input 
              type="email"
              id="email"
              name="email"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <label htmlFor="telephone">Phone Number: </label>
            <input 
              type="tel"
              id="telephone"
              name="telephone"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <label htmlFor="confirm-password">Confirm Password: </label>
            <input 
              type="password"
              id="password"
              name="confirm-password"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <button>Submit</button>
        </form>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/projectboard">ProjectBoard</Link>
        <p>&copy; 2022 Jason Whisnant</p>
      </div>
        
    </div>
    
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="0.9" d="M0,128L480,96L960,192L1440,224L1440,320L960,320L480,320L0,320Z"></path></svg>
  );
}

export default SignUp;