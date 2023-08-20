import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NavTabs from './components/Navtabs';

//pages
import Main from './pages/Main';
import History from './pages/History';
import Project from './pages/Project';
import Background from './pages/Background';
import Languages from './pages/Languages';
import Algorithms from './pages/Algorithms';
import TMI from './pages/TMI';

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className='nav'>
          <NavTabs />
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/history" element={<History />} />
          <Route path="/project" element={<Project />} />
          <Route path="/background" element={<Background />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/tmi" element={<TMI />} />
        </Routes>
        <footer
          className="fixed bg-neutral-200 text-center lg:text-left bottom-0 w-full">
          <div className="p-4 text-center text-neutral-700 ">
            © 2023 Copyright:
            <a
              className="text-neutral-800 dark:text-neutral-400 mx-2"
              href="#">JK 포트폴리오용 사이트입니다.</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}
