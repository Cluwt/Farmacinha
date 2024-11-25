import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import Cadastro from './Pages/CadastroPage';
import Login from './Pages/LoginPage';
import Atendente from './Pages/AtendentePage';
import Paciente from './Pages/PacientePage';
import Bulario from './Pages/BularioPage';
import Legislacao from './Pages/LegislacaoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/atendente" element={<Atendente />} />
        <Route path="/paciente" element={<Paciente />} />
        <Route path="/bulario" element={<Bulario />} />
        <Route path="/legislacao" element={<Legislacao />} />
      </Routes>
    </Router>
  );
}

export default App;
