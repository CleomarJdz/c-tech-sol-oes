import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<main
			style={{
				padding: "40px",
				minHeight: "100vh",
				background: "#fafafa",
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "16px",
			}}
		>
			<h1 style={{ color: "#ff6f00", margin: 0 }}>Bem-vindo à C-Tech Soluções</h1>
			<p style={{ maxWidth: 680 }}>
				Loja demo com produtos de informática. Use a navegação no topo para ver os
				produtos, sua conta ou o carrinho.
			</p>

			<div style={{ display: "flex", gap: "12px" }}>
				<Link
					to="/produtos"
					style={{
						background: "#ff6f00",
						color: "#fff",
						padding: "10px 16px",
						borderRadius: 8,
						textDecoration: "none",
						fontWeight: "600",
					}}
				>
					Ver Produtos
				</Link>

				<Link
					to="/conta"
					style={{
						background: "#e0e0e0",
						color: "#111",
						padding: "10px 16px",
						borderRadius: 8,
						textDecoration: "none",
						fontWeight: "600",
					}}
				>
					Minha Conta
				</Link>
			</div>
		</main>
	);
}
