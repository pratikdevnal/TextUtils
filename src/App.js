import Navbar from './components/Navbar'
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';
function App() {
  const [mode , setMode]=useState('light');//whether dark mode is enabled or not
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ="#042743"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ="white"
    }
  }
  return (
    <>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
{/* <About/> */}
<TextForm heading="Enter the Text To Analyze" mode={mode}/>

</div>

    </>
  );
}

export default App;
