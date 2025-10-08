import React from "react";
import Produto from "../components/Produto";

export default function Produtos({ adicionarAoCarrinho }) {
  const listaProdutos = [
    {
      nome: "Mouse Gamer RGB",
      preco: "199,90",
      imagem: "https://m.media-amazon.com/images/I/61X0F9b2HXL._AC_SL1500_.jpg",
    },
    {
      nome: "Teclado Mecânico",
      preco: "349,90",
      imagem: "https://m.media-amazon.com/images/I/61M7KETtQJL._AC_SL1500_.jpg",
    },
    {
      nome: "Monitor 24'' Full HD",
      preco: "899,00",
      imagem: "https://m.media-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg",
    },
    {
      nome: "Headset Gamer",
      preco: "249,90",
      imagem: "https://m.media-amazon.com/images/I/71z+vZ0jBLL._AC_SL1500_.jpg",
    },
    {
      nome: "Cadeira Gamer",
      preco: "1.499,00",
      imagem: "https://m.media-amazon.com/images/I/71pr2GzKj6L._AC_SL1500_.jpg",
    },
    {
      nome: "Placa de Vídeo RTX 3060",
      preco: "2.499,00",
      imagem: "https://m.media-amazon.com/images/I/81G1R7cN36L._AC_SL1500_.jpg",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        background: "#fafafa",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#ff6f00", marginBottom: "30px" }}>
        Produtos Disponíveis 🖥️
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {listaProdutos.map((p, index) => (
          <Produto
            key={index}
            nome={p.nome}
            preco={p.preco}
            imagem={p.imagem}
            onAdicionar={() => adicionarAoCarrinho(p)}
          />
        ))}
      </div>
    </div>
  );
}
