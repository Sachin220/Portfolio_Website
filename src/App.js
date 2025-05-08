import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import { useState, useEffect } from "react";
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;

  `;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
              width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
  `;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar />
      <Body>
        <Routes>
            <Route path="/" element={<Hero />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/skill" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
        {
          openModal.state && 
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        }
      </Body>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
