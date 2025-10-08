import React from "react";

export default function Produto({ nome, preco, imagem, onAdicionar }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "200px",
        textAlign: "center",
        background: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={imagem}
        alt={nome}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ color: "#333" }}>{nome}</h3>
      <p style={{ color: "#ff6f00", fontWeight: "bold" }}>R$ {preco}</p>
      <button
        onClick={onAdicionar}
        style={{
          backgroundColor: "#ff6f00",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
