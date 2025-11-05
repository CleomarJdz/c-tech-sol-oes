import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import Logo from "../assets/c-tech-logo.svg";

export default function Header({ carrinho }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        backgroundColor: "var(--ctech-blue-700)",
        color: "#fff",
        zIndex: 40,
      }}
    >
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={Logo} alt="C-Tech" style={{ height: 40 }} />
        </Link>
        <Link to="/produtos" style={linkStyle}>
          Produtos
        </Link>
      </div>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
  <button onClick={() => setOpen(true)} style={{ ...linkButtonStyle }}>Conta</button>

        <Link to="/carrinho" style={linkStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ShoppingCart size={18} />
            <span style={{ fontWeight: 700 }}>{carrinho.length}</span>
          </div>
        </Link>
      </div>

      {open && (
          <div style={modalOverlayStyle} onClick={() => setOpen(false)}>
          <div style={{ ...modalStyle, background: 'var(--card-bg)' }} onClick={(e) => e.stopPropagation()}>
            <h3>Entrar ou Registrar</h3>
            <p style={{ color: "var(--text-dark)" }}>Você pode entrar ou criar uma conta rapidamente.</p>
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <Link to="/conta" onClick={() => setOpen(false)} style={buttonLinkStyle}>Ir para Conta</Link>
              <button onClick={() => setOpen(false)} style={{ ...btn, background: "var(--ice-bg)" }}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
};

const linkButtonStyle = {
  background: "transparent",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
};

const modalOverlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
};

const modalStyle = {
  padding: 20,
  borderRadius: 8,
  width: 360,
  boxShadow: "0 8px 24px rgba(2,6,23,0.4)",
};

const buttonLinkStyle = {
  padding: "8px 12px",
  background: "var(--ctech-blue)",
  color: "#fff",
  textDecoration: "none",
  borderRadius: 6,
  fontWeight: 700,
};

const btn = {
  padding: "8px 12px",
  borderRadius: 6,
  border: "none",
};
