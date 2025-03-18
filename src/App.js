import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../src/pages/dashboard.jsx';
import CanvasAnimation from './components/login.jsx';
import GetStarted from './components/getstart.jsx';
import Appointment from './components/appointment.jsx';
import Aboutus from './components/aboutus.jsx';
import Contactus from './components/contactus.jsx';
import Services from './components/services.jsx';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/login' element={<CanvasAnimation />}/>
          <Route path='/getstarted' element={<GetStarted />}/>
          <Route path='/Appointment' element={<Appointment />}/>
          <Route path='/Aboutus' element={<Aboutus />}/>
          <Route path='/Contactus' element={<Contactus />}/>
          <Route path='/Services' element={<Services />}/>
          

          

          

          




        </Routes>
      </div>
    </Router>
  );
};

export default App;
