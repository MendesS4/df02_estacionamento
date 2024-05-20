import React from 'react';
import ReservationForm from './pages/ReservationForm';
import ReservationList from './pages/ReservationList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Reservar uma vaga</Link>
            </li>
            <li>
              <Link to="/list">Lista de vagas do prédio</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ReservationForm />} />
          <Route path="/list" element={<ReservationList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;