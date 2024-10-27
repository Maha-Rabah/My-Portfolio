import { useState, useEffect } from "react";
import Preloader from "../components/Pre";
import Navbar from "../components/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/ResumeNew";
import Footer from "../components/Footer";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import "./App.css";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter basename={'/My-Portfolio'}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />/
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
