import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../src/pages/dashboard.jsx';
import CanvasAnimation from './components/login.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/login' element={<CanvasAnimation />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
