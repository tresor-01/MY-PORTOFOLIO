import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { useActivePage } from './hooks/useActivePage';

function App() {
  const { activePage, setActivePage } = useActivePage();

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'certificates':
        return <Certificates />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <main className="min-h-screen bg-smoky-black">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Fixed on large screens */}
          <div className="lg:w-1/4 lg:sticky lg:top-8 lg:self-start">
            <Sidebar />
          </div>
          
          {/* Main Content - Scrollable */}
          <div className="lg:w-3/4">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <div className="mt-6 lg:mt-0">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;