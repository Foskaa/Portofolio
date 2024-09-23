import "./App.css";
import { Routes, Route } from 'react-router-dom';
import About from "./Page/about-me";
import Navbar from "./components/navbar";
import Education from "./Page/education-experience";
import Portofolio from "./Page/portofolio";
import Contact from "./Page/contactme"




function App() {

  return (
    <>
      <Navbar />
    <Routes>
        <Route path='/' element={<About />} />
        <Route path='/education-experience' element={<Education />} />
        <Route path='/portofolio' element={<Portofolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}


export default App
