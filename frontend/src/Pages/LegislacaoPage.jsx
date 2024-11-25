import React from 'react';

function LegislacaoPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #ddd' }}>
        <div style={{ fontSize: '14px', color: '#555' }}>
          <a href="#" style={{ marginRight: '15px', textDecoration: 'none', color: '#555' }}>Saúde & Bem-Estar</a>
          <a href="#" style={{ marginRight: '15px', textDecoration: 'none', color: '#555' }}>Bula</a>
          <a href="#" style={{ marginRight: '15px', textDecoration: 'none', color: '#555' }}>Medicamentos</a>
        </div>
        <div style={{ fontSize: '14px', color: '#555' }}>
          <select style={{ border: 'none', background: 'none', fontSize: '14px', color: '#555', cursor: 'pointer' }}>
            <option>Olá, Usuário</option>
          </select>
        </div>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 40px', textAlign: 'center', flex: '1' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#000' }}>Farmacinha</h1>
        <h2 style={{ fontSize: '22px', color: '#d81b1b', marginTop: '-10px' }}>Saúde & Bem-Estar</h2>
        <h3 style={{ fontSize: '18px', color: '#000', marginTop: '-5px' }}>Cuidando de Você com Clareza e Confiança</h3>

        <div style={{ marginTop: '50px', textAlign: 'left' }}>
          <a href="#" style={{ display: 'block', fontSize: '18px', color: '#d81b1b', textDecoration: 'none', margin: '10px 0', fontWeight: 'bold' }}>Clique aqui para encontrar a RDC nº 471/2021 (Antibióticos)</a>
          <a href="#" style={{ display: 'block', fontSize: '18px', color: '#d81b1b', textDecoration: 'none', margin: '10px 0', fontWeight: 'bold' }}>Clique aqui para encontrar a Portaria 344/98 (Psicotrópicos)</a>
          <a href="#" style={{ display: 'block', fontSize: '18px', color: '#d81b1b', textDecoration: 'none', margin: '10px 0', fontWeight: 'bold' }}>Clique aqui para encontrar sobre Programa Farmácia Popular</a>
        </div>
      </main>

      <footer style={{ backgroundColor: '#f9f9f9', width: '100%', padding: '20px 0', textAlign: 'center', borderTop: '1px solid #ddd' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
          <div><a href="#">Site name</a></div>
          <div>
            <a href="#">Topic</a>
            <a href="#">Page</a>
            <a href="#">Page</a>
            <a href="#">Page</a>
          </div>
          <div>
            <a href="#">Topic</a>
            <a href="#">Page</a>
            <a href="#">Page</a>
            <a href="#">Page</a>
          </div>
          <div>
            <a href="#">Topic</a>
            <a href="#">Page</a>
            <a href="#">Page</a>
            <a href="#">Page</a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
          <i className="fab fa-facebook" style={{ fontSize: '20px', color: '#555' }}></i>
          <i className="fab fa-linkedin" style={{ fontSize: '20px', color: '#555' }}></i>
          <i className="fab fa-youtube" style={{ fontSize: '20px', color: '#555' }}></i>
          <i className="fab fa-instagram" style={{ fontSize: '20px', color: '#555' }}></i>
        </div>
      </footer>
    </div>
  );
}

export default LegislacaoPage;
