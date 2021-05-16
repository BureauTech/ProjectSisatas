import React, { createContext, useContext, useState } from "react";

const InfoAtaContext = createContext();

export default function InfoAtaProvider({ children }) {
  const [infoAta, setInfoAta] = useState({
    header: "",
    projeto: "",
    pauta: "",
    assuntos: [],
  });
  return <InfoAtaContext.Provider value={{ infoAta, setInfoAta }}>{children}</InfoAtaContext.Provider>;
}

export function useInfoAta() {
  const context = useContext(InfoAtaContext);
  if (!context) throw new Error("useInfoAta must be used within a InfoAtaProvider");
  const { infoAta, setInfoAta } = context;
  return { infoAta, setInfoAta };
}
