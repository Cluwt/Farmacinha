import React from 'react';

function BularioPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fff' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #ddd' }}>
        <div style={{ fontSize: '14px', color: '#555' }}>
          <a href="#">Saúde & Bem-Estar</a> | <a href="#">Anvisa</a> | <a href="#">Medicamentos</a>
        </div>
        <div style={{ fontSize: '14px', color: '#555' }}>
          <select style={{ border: 'none', background: 'none', fontSize: '14px', color: '#555', cursor: 'pointer' }}>
            <option>Olá, Usuário</option>
          </select>
        </div>
      </header>

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 40px', textAlign: 'left', flex: '1' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#000' }}>Farmacinha</h1>
        <h2 style={{ fontSize: '22px', color: '#d81b1b', marginTop: '-10px' }}>Saúde & Bem-Estar</h2>
        <h3 style={{ fontSize: '18px', color: '#000', marginTop: '-5px' }}>Cuidando de Você com Clareza e Confiança</h3>

        <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', width: '100%', maxWidth: '600px' }}>
          <input type="text" placeholder="Buscar bula" style={{ flex: '1', padding: '10px', border: '1px solid #ccc', borderRadius: '4px 0 0 4px', fontSize: '16px' }} />
          <button style={{ padding: '10px 20px', border: 'none', backgroundColor: '#000', color: '#fff', cursor: 'pointer', borderRadius: '0 4px 4px 0', fontSize: '16px' }}>Pesquisar</button>
        </div>

        <div style={{ width: '100%', maxWidth: '800px', fontSize: '16px', lineHeight: '1.6', marginTop: '20px', color: '#333' }}>
          <p><strong>Ozempic (semaglutida)</strong> é um medicamento utilizado para o tratamento de diabetes tipo 2.</p>
          <p><strong>Indicações:</strong></p>
          <ul>
            <li>Controle da glicemia em adultos com diabetes tipo 2.</li>
            <li>Auxílio na perda de peso em pessoas com obesidade ou sobrepeso associado a condições como diabetes.</li>
          </ul>

          <p><strong>Como funciona:</strong></p>
          <ul>
            <li>A semaglutida imita a ação do hormônio GLP-1, aumentando a liberação de insulina e diminuindo o apetite, o que ajuda a controlar os níveis de açúcar no sangue e a promover a perda de peso.</li>
          </ul>

          <p><strong>Modo de uso:</strong></p>
          <ul>
            <li>Administração subcutânea (injeção) uma vez por semana.</li>
            <li>Dose inicial de 0,25 mg, podendo ser aumentada gradualmente conforme orientação médica.</li>
          </ul>

          <p><strong>Contraindicações:</strong></p>
          <ul>
            <li>Alergia à semaglutida ou aos componentes da fórmula.</li>
            <li>Histórico de câncer de tireoide medular ou neoplasia endócrina múltipla tipo 2.</li>
          </ul>

          <p><strong>Efeitos colaterais:</strong></p>
          <ul>
            <li>Náusea, vômito e diarreia.</li>
            <li>Dor abdominal e constipação.</li>
            <li>Hipoglicemia (nível baixo de açúcar no sangue), especialmente quando usado com outros medicamentos antidiabéticos.</li>
          </ul>

          <p><strong>Precauções:</strong></p>
          <ul>
            <li>Usar com cautela em pessoas com problemas gastrointestinais graves.</li>
            <li>Monitorar a função renal em pessoas com histórico de insuficiência renal.</li>
            <li>Não é indicado para o tratamento de diabetes tipo 1.</li>
          </ul>
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

export default BularioPage;
