import React from "react";

export default function Carrinho({ carrinho }) {
  return (
    <div
      style={{
        padding: "40px",
        background: "#f9f9f9",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#ff6f00" }}>Carrinho de Compras 🛍️</h1>

      {carrinho.length === 0 ? (
        <p style={{ marginTop: "20px" }}>Seu carrinho está vazio.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>
          {carrinho.map((item, index) => (
            <li
              key={index}
              style={{
                background: "#fff",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <strong>{item.nome}</strong> — R$ {item.preco}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
