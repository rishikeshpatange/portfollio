import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route,useLocation } from "react-router-dom";
import Project from './Project';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
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
