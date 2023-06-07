import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import './App.css';
import React, { useState } from 'react'
// import { BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
    const [mode,setMode] = useState('light');

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
          setAlert({
            msg: message,
            type: type

          })
          setTimeout(()=>{
              setAlert(null);
          },2000)
    }

    const toggleMode = ()=>{
      if(mode=== 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#161125';
        showAlert("You are enabled dark mode","success")
      }
      else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("You are enabled light mode","success")
      }
    }
  return (
   <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
   <Alert alert={alert}/>
     <div className="container my-3">
  

    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}></TextForm>
   

  

    </div>
   </>
  ); 
}

export default App;
