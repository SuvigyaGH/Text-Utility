import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
// import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
// const [mode, setMode] = useState('light');
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode has been enabled", "success");
      document.title = 'TextUtils : Dark Mode';

      setInterval(() => {
        document.title = 'TextUtils is Awesome!';
      }, 1000);

      setInterval(() => {
        document.title = 'TextUtils is Amazing!';
      }, 2000);
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been Enabled", "success");
      document.title = 'TextUtils : Light Mode';

    }
  }

  return (
    <>

<Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    
    <div className="container my-4">

    <Routes>
        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Suck My Dick!" mode={mode}/>
        </Route>
    </Routes>
    </div>
</Router>

    </>
  );
}  

export default App;
