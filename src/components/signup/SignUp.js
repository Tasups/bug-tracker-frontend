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
            <label htmlFor="first-name" hidden="hidden">First Name: </label>
            <input 
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
              // value={firstName}
              // onChange={firstNameChange}
              required
            />
            <label htmlFor="last-name" hidden="hidden">Last Name: </label>
            <input 
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <label htmlFor="email" hidden="hidden">Email: </label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <label htmlFor="telephone" hidden="hidden">Phone Number: </label>
            <input 
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Phone Number"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <label htmlFor="password" hidden="hidden">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              // value={lastName}
              // onChange={lastNameChange}
              required
            />
            <label htmlFor="confirm-password" hidden="hidden">Confirm Password: </label>
            <input 
              type="password"
              id="password"
              name="confirm-password"
              placeholder="Confirm Password"
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
