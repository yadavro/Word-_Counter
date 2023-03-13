import React , { useState } from 'react';
import './App.css';
import About from './components/About';
import  Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode ,setMode]=useState("light");
  const [alert ,setAlert]=useState(null);

  const showAlert =(message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },3000);
  }

  const toggleMode =()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode enabled","success");
    }else{
      setMode("light");
       document.body.style.backgroundColor="white";
       showAlert("Dark mode disabled","warning");
    }
  }
  return (
 <>
 <BrowserRouter>
<Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
<Routes>
<Route exact path="/about" element={<About mode={mode} />}/>
<Route exact path="/" element={<Textform showAlert={showAlert} heading="Text to Analyze" mode={mode}/>} />
{/* <About/> */}
</Routes>
</div>
 </BrowserRouter>
 </>
  );
}

export default App;
