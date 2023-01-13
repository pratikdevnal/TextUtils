import Navbar from './components/Navbar'
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const [alert, setAlert] =  useState(null);
  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2500);
  }
  const [mode , setMode]=useState('light');//whether dark mode is enabled or not
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ="#042743"
      showAlert("Dark mode Enabled", "success")
      document.title = "TextUtils - DarkMode"
      //for education 
      // setInterval(()=>
      // {
      //   document.title = "TextUtils is amazing";
      // },2000);
      // setInterval(()=>
      // {
      //   document.title = "install TextUtils";
      // },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ="white"
      showAlert("Light mode Enabled", "success")
      document.title = "TextUtils"
    }
  }
  return (
    <>

<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <About/> */}
<TextForm heading="Enter the Text To Analyze" mode={mode} showAlert= {showAlert}/>

</div>

    </>
  );
}

export default App;
