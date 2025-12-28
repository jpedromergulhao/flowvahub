import { createContext, useContext } from "react";

interface LayoutContextData {
  openSidebar: () => void;
}

export const LayoutContext = createContext<LayoutContextData | null>(null);

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within LayoutContext.Provider");
  }
  return context;
}