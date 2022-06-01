import { useState, useEffect } from 'react'

import './App.css'

import data from '../data/fakedata.json'
import MONGO_URI from '../data/data'
import Card from './Card'

function App() {
  
  const [issues, setIssues] = useState()
  
  setIssues(data)
  
  // FOR SOME ODD REASON .FETCH IS NOT SUPPORTED ON AWS CLOUD9
  // useEffect(() => {
  //   fetch(MONGO_URI)
  //   .then(response => response.json())
  //   .then(data => setIssues(data))
  // }, [])
  
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
