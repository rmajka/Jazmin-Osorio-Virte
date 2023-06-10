import './App.css'
import { useState, useRef, useEffect } from "react";
import Navbar from './components/navbar/Navbar'
import MobleNavbar from "./components/mobileNavbar/MobleNavbar";
import Home from "./pages/home/Home";
import SobreMi from "./pages/sobreMi/SobreMi";
import Articulos from "./pages/articulos/Articulos";
import Contacto from "./pages/contacto/Contacto";
import Footer from "./pages/footer/Footer";


function App() {
  //use the position of every link to make it active and chage border bottom
  const [position, setPosition] = useState(0);


  const handleScroll = () => {
    const divPosition = homeRef.current.getBoundingClientRect();
    setPosition(divPosition.top);
  };

//references for scrolling to a position
const homeRef = useRef(null)
const sobremiRef = useRef(null)
const articulosRef = useRef(null)
const contactoRef = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='App'> 
      <MobleNavbar position={position} homeRef={homeRef} sobremiRef={sobremiRef} articulosRef={articulosRef} contactoRef={contactoRef} />
      <Navbar position={position} homeRef={homeRef} sobremiRef={sobremiRef} articulosRef={articulosRef} contactoRef={contactoRef} />
    <main className="main">
        <Home homeRef={homeRef} />
        <SobreMi sobremiRef={sobremiRef} />
        <Articulos articulosRef={articulosRef} />
        <Contacto contactoRef={contactoRef} />
        <Footer />
    </main>
    </div>
  )
}

export default App
