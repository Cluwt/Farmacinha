// src/pages/Home.jsx
import React from "react";
import farmaciaImage from "../Media/farmacia.jpeg"; // Importando a imagem
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <div style={styles.logo}>
          <h1 style={styles.logoText}>Saúde&<br />Bem-Estar</h1>
        </div>
        <nav>
          <ul style={styles.navLinks}>
          <li><Link to="/login" style={styles.navLink}>Entre</Link></li>
          <li><Link to="/cadastro" style={styles.navLink}>Cadastre-se</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Farmacinha</h1>
        <h2 style={styles.heroSubtitle}>Saúde & Bem-Estar</h2>
        <p style={styles.heroText}>Cuidando de Você com Clareza e Confiança</p>
        <p style={styles.heroSubtext}>Dúvidas sobre medicamentos ou prescrições? Encontre orientações e respostas com segurança aqui.</p>
      </section>

      {/* Image Section */}
      <section style={styles.imageSection}>
      <img src={farmaciaImage} alt="Farmácia" style={styles.heroImage} />
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
        <div style={styles.testimonialHeader}>
          <h2 style={styles.testimonialTitle}>O que nossos clientes dizem</h2>
          <p style={styles.testimonialDesc}>Veja como o Farmacinha está transformando o acesso à saúde.</p>
        </div>
      
        <div style={styles.testimonialGrid}>
          <div style={styles.testimonial}>
            <p>"O Farmacinha mudou minha vida, agora consigo entender minhas prescrições com facilidade!"</p>
            <div style={styles.author}>
              <p><strong>Ana Santos</strong></p>
              <p>Paciente regular</p>
            </div>
          </div>
          <div style={styles.testimonial}>
            <p>"Incrível como é fácil acessar informações sobre meus medicamentos e programas de desconto."</p>
            <div style={styles.author}>
              <p><strong>João Oliveira</strong></p>
              <p>Cliente fiel</p>
            </div>
          </div>
          <div style={styles.testimonial}>
            <p>"A agilidade no atendimento é fenomenal! Não perco mais tempo em filas desnecessárias."</p>
            <div style={styles.author}>
              <p><strong>Maria Ferreira</strong></p>
              <p>Usuária satisfeita</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLeft}>
            <p style={styles.siteName}>Farmacinha - Saúde & Bem-Estar</p>
            <div style={styles.socialIcons}>
              <a href="#"><img src="icon-facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="icon-linkedin.svg" alt="LinkedIn" /></a>
              <a href="#"><img src="icon-youtube.svg" alt="YouTube" /></a>
            </div>
          </div>
          
          <div style={styles.footerGrid}>
            <div style={styles.footerColumn}>
              <h4>Serviços</h4>
              <p><a href="#">Consultas Online</a></p>
              <p><a href="#">Prescrições</a></p>
              <p><a href="#">Medicamentos</a></p>
            </div>
            <div style={styles.footerColumn}>
              <h4>Ajuda</h4>
              <p><a href="#">Central de Ajuda</a></p>
              <p><a href="#">Fale Conosco</a></p>
              <p><a href="#">Dúvidas Frequentes</a></p>
            </div>
            <div style={styles.footerColumn}>
              <h4>Empresa</h4>
              <p><a href="#">Sobre Nós</a></p>
              <p><a href="#">Carreiras</a></p>
              <p><a href="#">Política de Privacidade</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Estilos em linha
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "10px 0",
  },
  logo: {
    marginLeft: "20px",
  },
  logoText: {
    fontSize: "18px",
    lineHeight: "1.2",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    marginRight: "20px",
  },
  navLink: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
  hero: {
    textAlign: "center",
    padding: "60px 0",
    marginTop: "60px",
  },
  heroTitle: {
    fontSize: "64px",
    color: "black",
  },
  heroSubtitle: {
    color: "red",
    fontSize: "48px",
  },
  heroText: {
    marginTop: "10px",
    fontSize: "32px",
  },
  heroSubtext: {
    marginTop: "20px",
    fontStyle: "italic",
    fontSize: "28px",
  },
  imageSection: {
    textAlign: "center",
    margin: "20px 0",
  },
  heroImage: {
    maxWidth: "100%",
    height: "auto",
    width: "1216px",
    height: "596px",
  },
  testimonials: {
    textAlign: "center",
    padding: "40px 0",
  },
  testimonialHeader: {
    textAlign: "left",
    paddingLeft: "315px",
    marginBottom: "10px",
  },
  testimonialTitle: {
    fontSize: "24px",
  },
  testimonialDesc: {
    fontSize: "18px",
  },
  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "1216px",
    margin: "0 auto",
  },
  testimonial: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  },
  author: {
    marginTop: "10px",
  },
  footer: {
    padding: "20px 0",
    backgroundColor: "#f1f1f1",
    textAlign: "left",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1216px",
    margin: "0 auto",
    padding: "0 20px",
  },
  siteName: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    marginRight: "20px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "10px",
  },
  footerColumn: {
    fontSize: "18px",
  },
};

export default Home;
