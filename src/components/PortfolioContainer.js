import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume'
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if( currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact'){
    return <Contact />;
    }
    return <About/>
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <nav> 
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
    <div>
      {renderPage()}
    </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
 