import { Link } from 'react-router-dom'

const SignIn = () => {
  return(
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
            <button>
              <Link to="/dashboard" className="signin-submit">Submit</Link>
            </button>
        </form>
        <div className="auth-card-signup">
          <p>Can't sign in? <Link to="/signup">Sign up.</Link></p>
        </div>
          <p>&copy; 2022 Jason Whisnant</p>
      </div>
        
    </div>
    )
}

export default SignIn