import React from "react";

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function Carrinho({ carrinho, removerDoCarrinho, limparCarrinho }) {
  const agrupado = carrinho.reduce((acc, item) => {
    const key = item.id ?? item.nome;
    if (!acc[key]) acc[key] = { ...item, quantidade: 0 };
    acc[key].quantidade += 1;
    return acc;
  }, {});

  const itens = Object.values(agrupado);
  const total = itens.reduce((s, it) => s + (it.preco || 0) * it.quantidade, 0);

  // Checkout calculations
  const pixDiscount = 0.07; // 7% off
  const totalPix = total - total * pixDiscount;
  const parcelas = 10; // 10x sem juros
  const parcelaValor = total / parcelas;

  return (
    <div
      style={{
        paddingTop: 90,
        padding: "24px",
        minHeight: "calc(100vh - 64px)",
        background: "#fafafa",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#ff6f00" }}>Carrinho de Compras 🧾</h1>

      {itens.length === 0 ? (
        <p style={{ marginTop: 20 }}>Seu carrinho está vazio.</p>
      ) : (
        <div style={{ width: "92%", margin: "20px auto" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {itens.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#fff",
                  marginBottom: 12,
                  padding: 12,
                  borderRadius: 8,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <img src={item.imagem} alt={item.nome} style={{ width: 64, height: 48, objectFit: "cover", borderRadius: 6 }} />
                  <div style={{ textAlign: "left" }}>
                    <strong>{item.nome}</strong>
                    <div style={{ color: "#666", fontSize: 14 }}>{formatPrice(item.preco)} x {item.quantidade}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ fontWeight: 700 }}>{formatPrice(item.preco * item.quantidade)}</div>
                  <button onClick={() => removerDoCarrinho(item)} style={{ background: "#eee", padding: "6px 8px", borderRadius: 6 }}>Remover</button>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ textAlign: "right", marginTop: 12 }}>
            <div style={{ marginBottom: 6 }}><strong>Subtotal: {formatPrice(total)}</strong></div>
            <div style={{ marginBottom: 6, color: "#065f46" }}><strong>PIX (7% off): {formatPrice(totalPix)}</strong></div>
            <div style={{ marginBottom: 6, color: "#1f2937" }}><strong>Cartão 10x sem juros: {formatPrice(parcelaValor)} / parcela</strong></div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 12 }}>
            <button onClick={() => { navigator.clipboard?.writeText('PIX_SIMULADO_000111222333'); alert('Código PIX copiado!'); }} style={{ background: "#10b981", color: "white", padding: "10px 14px", borderRadius: 8 }}>
              Pagar com PIX (7% off)
            </button>

            <button onClick={() => alert(`Finalizar em ${parcelas}x sem juros de ${formatPrice(parcelaValor)}`)} style={{ background: "#3b82f6", color: "white", padding: "10px 14px", borderRadius: 8 }}>
              Pagar com Cartão (10x)
            </button>

            <button onClick={limparCarrinho} style={{ background: "#ff6f00", color: "white", padding: "10px 14px", borderRadius: 8 }}>Limpar Carrinho</button>
          </div>
        </div>
      )}
    </div>
  );
}
