import React, { createContext, useContext, useState } from "react";

const Autenticacao = createContext();

export default function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState({
    estaLogado: false,
    token: "",
    usuNome: "Denis",
    usuEmail: "denis@denis.com",
  });
  return <Autenticacao.Provider value={{ usuario, setUsuario }}>{children}</Autenticacao.Provider>;
}

export function useAutenticacao() {
  const context = useContext(Autenticacao);
  if (!context) throw new Error("useAutenticacao must be used within a AutenticacaoProvider");
  const { usuario, setUsuario } = context;
  return { usuario, setUsuario };
}
