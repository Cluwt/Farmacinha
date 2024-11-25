import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Cadastro = () => {
  const [view, setView] = useState(""); // "cliente", "atendente" ou vazio para decidir a visualização inicial
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    cpf: "",
    email: "",
    senha: "",
  });

  // Animações
  const containerVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
  };

  const handleBack = () => {
    setView(""); // Voltar à tela inicial
    setFormData({ nome: "", cnpj: "", cpf: "", email: "", senha: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (type) => {
    const url =
      type === "Atendente"
        ? "http://127.0.0.1:8000/api/registro/atendente/" // Endpoint do registro de atendente
        : "http://127.0.0.1:8000/api/registro/cliente/"; // Endpoint do registro de cliente

    try {
      const response = await axios.post(url, formData); // Envio de dados para o endpoint correto
      alert(`${type} registrado com sucesso!`);
      console.log("Response:", response.data);
      handleBack(); // Reseta o formulário após o sucesso]
      Navigate('/login')
    } catch (error) {
      console.error("Erro ao enviar:", error.response?.data || error.message);
      alert("Ocorreu um erro. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <div style={styles.logo}>
          <h1 style={styles.logoText}>Saúde&<br />Bem-Estar</h1>
        </div>
        <nav>
          <ul style={styles.navLinks}>
            <li>
              <a href="/" style={styles.navLink}>Início</a>
            </li>
            <li>
              <a href="/cadastro" style={styles.navLink}>Cadastre-se</a>
            </li>
            <li>
              <a href="/login" style={styles.navLink}>Entrar</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo */}
      <div style={styles.content}>
        <AnimatePresence>
          {/* Tela de Escolha */}
          {view === "" && (
            <motion.div
              style={styles.choiceContainer}
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 style={styles.title}>Você quer se registrar como?</h1>
              <div style={styles.options}>
                <motion.div
                  style={styles.optionBox}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView("atendente")}
                >
                  Atendente
                </motion.div>
                <motion.div
                  style={styles.optionBox}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView("cliente")}
                >
                  Cliente
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Formulário de Atendente */}
          {view === "atendente" && (
            <motion.div
              style={styles.formContainer}
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 style={styles.formTitle}>Registro de Atendente</h2>
              <input
                type="text"
                placeholder="Nome Completo"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="text"
                placeholder="CNPJ"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                style={styles.input}
              />
              <div style={styles.btnGroup}>
                <button style={styles.btnCancel} onClick={handleBack}>
                  Voltar
                </button>
                <button
                  style={styles.btnSubmit}
                  onClick={() => handleSubmit("Atendente")}
                >
                  Registrar
                </button>
              </div>
            </motion.div>
          )}

          {/* Formulário de Cliente */}
          {view === "cliente" && (
            <motion.div
              style={styles.formContainer}
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 style={styles.formTitle}>Registro de Cliente</h2>
              <input
                type="text"
                placeholder="Nome Completo"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="text"
                placeholder="CPF"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                style={styles.input}
              />
              <div style={styles.btnGroup}>
                <button style={styles.btnCancel} onClick={handleBack}>
                  Voltar
                </button>
                <button
                  style={styles.btnSubmit}
                  onClick={() => handleSubmit("Cliente")}
                >
                  Registrar
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Estilos CSS em JS
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "10px 20px",
    position: "fixed",
    top: 0,
    zIndex: 1000,
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
    gap: "20px",
    marginRight: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
  content: {
    marginTop: "150px", // Para dar espaço abaixo da Navbar
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  choiceContainer: {
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  options: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  optionBox: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "20px 30px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    width: "300px",
    textAlign: "center",
  },
  formTitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  btnCancel: {
    backgroundColor: "#d81b1b",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  btnSubmit: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Cadastro;
