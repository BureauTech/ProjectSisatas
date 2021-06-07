import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [menuSelected, setMenuSelected] = useState(20);
  return <MenuContext.Provider value={{ menuSelected, setMenuSelected }}>{children}</MenuContext.Provider>;
}

export function useMenuSelected() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenuSelected must be used within a MenuProvider");
  const { menuSelected, setMenuSelected } = context;
  return { menuSelected, setMenuSelected };
}
