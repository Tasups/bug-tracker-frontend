
import './App.css'
// import data from './data/fakedata.json'
// to be used when the backend is established
//import BACKEND_API from '.data/data'
import SideNav from './components/SideNav'
import Header from './components/Header'
import Dashboard from './components/dashboard/Dashboard'


function App() {
  
  // // will need to change to BACKEND_API when ready
  // useEffect(() => {
  //   setIssues(data)
  // }, [])
  
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Dashboard />
      {/*
        {
        issues.map((el) => (
          <Card
            key={el.title}
            projectTitle={el.projectTitle}
            completed={el.completed}
            description={el.description}
            createdAt={el.createdAt}
            issueTitle={el.issueTitle}
            priority={el.priority}
            issuer={el.issuer}
            developer={el.developer}
            status={el.status}
            type={el.type}
          />
        ))
      }
      */}
    </div>
  );
}

export default App;
