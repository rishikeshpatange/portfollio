import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route,useLocation } from "react-router-dom";
import Project from './Project';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';



function App() {

  const [theme, setTheme] = useState('theme' ? 'light' : 'dark');
  const [btnText, setBtnText] = useState('btnText'? "Dark":"Light")

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    const newBtnText = btnText === "Light"? "Dark": "Light"
    setBtnText(newBtnText)
  }


  const location = useLocation();
  return (
    <div className="App" data-theme={theme} >
      <Header  switchTheme={switchTheme} btnText={btnText} />
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
