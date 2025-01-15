import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import NavPage from './components/NavPage/NavPage';
import About from './components/About/About';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import ContactPage from './components/ContactPage/ContactPage';
import AFooter from './components/AboutFooter/AFooter';
import DFooter from './components/DestinFooter/DFooter';
import BFooter from './components/BlogFooter/BFooter';
import CFooter from './components/ContactPage/CFooter/CFooter';

const App = () => {
  const location = useLocation(); // Access current route path

  return (
    <>
      {/* Render NavBar unless on the /navpage route */}
      {location.pathname !== '/navpage' && <NavBar />}

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/navpage" element={<NavPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Render Footer only on the home page */}
      {location.pathname === '/' && <Footer />}
      {location.pathname === '/about' && <AFooter />}
      {location.pathname === '/destination' && <DFooter />}
      {location.pathname === '/blog' && <BFooter />}
      {location.pathname === '/contact' && <CFooter />}
    </>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
