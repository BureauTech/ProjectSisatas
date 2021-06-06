import React, { createContext, useContext, useState } from "react";

const Autenticacao = createContext();

/**
 * Arquivo para contexto de autenticação e dados de sessão
 * @author Denis Lima
 * @param {Component} param0 Componentes de níveis abaixo > Components <
 * @returns Retorna um Context Provider para dados de sessão
 */
export default function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState({
    estaLogado: false,
    usuSessionToken: "",
    usuNome: "",
    usuId: "",
    usuEmail: "",
    usuCargo: "",
    usuAreaEmpresa: "",
    usuTelefone: "",
    usuPerfil: "",
  });
  return <Autenticacao.Provider value={{ usuario, setUsuario }}>{children}</Autenticacao.Provider>;
}

/**
 * Função de contexto para os dados de sessão (Context Consumer)
 * @author Denis Lima
 * @returns Retorna os dados de sessão do usuário e a função para setar os dados
 * @throws Exceção de aviso informando que deve ser usado dentro de um AutenticacaoProvider
 */
export function useAutenticacao() {
  const context = useContext(Autenticacao);
  if (!context) throw new Error("useAutenticacao must be used within a AutenticacaoProvider");
  const { usuario, setUsuario } = context;
  return { usuario, setUsuario };
}
