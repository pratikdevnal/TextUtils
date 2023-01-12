import Navbar from './components/Navbar'
import './App.css';
// import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
<Navbar title="TextUtils" aboutText="About"/>
<div className="container my-3">
{/* <TextForm heading="Enter the Text To Analyze"/> */}
<About/>

</div>

    </>
  );
}

export default App;
