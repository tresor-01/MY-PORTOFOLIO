import { useState } from 'react';
import About from './pages/About.jsx';
import Sidebar from './components/Sidebar.jsx';
import Certificates from './pages/Certificates.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
function App() {
  return (
    <>
    <About />
    <Certificates/>
    < Portfolio/>
    <Resume/>
    <Contact/>
      
    </>
  );
}

export default App;
