import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../src/pages/dashboard.jsx';
import CanvasAnimation from './components/login.jsx';
import GetStarted from './components/getstart.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/login' element={<CanvasAnimation />}/>
          <Route path='/getstarted' element={<GetStarted />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
