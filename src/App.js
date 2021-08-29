import './App.css';
import Navbar from './components/navbar'
import TextArea from './components/textarea'
import About from './components/about'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light');

  const dark = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#202529";
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
    }
  }

  return (
    <>
      <Router> 
        <Navbar button={dark} title="TextUtils" mode={mode}/>
        <Switch>
          <Route exact path="/">
            <div className="container">
              <TextArea header="Enter Your Text Below" mode={mode} /> 
            </div>
          </Route>
          <Route path="/about">
            <div className="container">
            <About />
            </div>
          </Route>
        </Switch>
     
       </Router>
    </>
  );
}

export default App;
