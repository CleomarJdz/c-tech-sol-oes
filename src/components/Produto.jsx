import React from "react";

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function Produto({ nome, preco, imagem, onAdicionar }) {
  return (
    <div
      style={{
        border: "1px solid #e6e6e6",
        borderRadius: 12,
        padding: 12,
        width: 220,
        textAlign: "center",
        background: "#fff",
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ height: 140, overflow: "hidden", borderRadius: 8 }}>
        <img
          src={imagem}
          alt={nome}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ color: "#222", margin: "8px 0 6px" }}>{nome}</h3>
        <p style={{ color: "#ff6f00", fontWeight: "700", margin: 0 }}>{formatPrice(preco)}</p>
      </div>

      <button
        onClick={onAdicionar}
        style={{
          backgroundColor: "#ff6f00",
          color: "white",
          border: "none",
          borderRadius: 8,
          padding: "10px 12px",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
