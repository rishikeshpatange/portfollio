import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Fotter from './components/Fotter';
import About from './components/About';
import Work from './components/Work';
import ScrollToTop from './ScrollToTop';



function App() {

  // const [theme, setTheme] = useState('theme' ? 'light' : 'dark');
  // const [btnText, setBtnText] = useState('btnText'? "Dark":"Light")

  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   const newBtnText = btnText === "Light"? "Dark": "Light"
  //   setBtnText(newBtnText)
  // }


  const location = useLocation();
  return (
    <div className="App" >
      {/* <Header  switchTheme={switchTheme} btnText={btnText} /> */}
      <Header />
      <ScrollToTop>

        <AnimatePresence initial={true} exitBeforeEnter>
          <Routes location={location} key={location.pathname} >
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/About" element={<About />}>
            </Route>
            <Route path="/Work" element={<Work />}>
            </Route>

          </Routes>
        </AnimatePresence>
      </ScrollToTop>
      <Fotter />
    </div>
  );
}

export default App;
