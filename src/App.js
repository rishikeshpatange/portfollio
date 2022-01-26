import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route,useLocation } from "react-router-dom";
import Project from './Project';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import useLocalStorage from 'use-local-storage'


function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  const location = useLocation();
  return (
    <div className="App" data-theme={theme} >
      <Header  switchTheme={switchTheme} />
      <AnimatePresence initial={true} exitBeforeEnter>
        <Routes  location={location} key={location.pathname} >
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/project" element={<Project />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
