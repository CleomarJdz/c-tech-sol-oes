import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/inicio.jsx";
import Produtos from "./pages/Produtos.jsx";
import Carrinho from "./pages/Carrinho.jsx";
import Conta from "./pages/Conta.jsx";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
    <div>
      <Header carrinho={carrinho} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/produtos"
          element={<Produtos adicionarAoCarrinho={adicionarAoCarrinho} />}
        />
        <Route
          path="/carrinho"
          element={<Carrinho carrinho={carrinho} />}
        />
        <Route path="/conta" element={<Conta />} />
      </Routes>
    </div>
  );
}
