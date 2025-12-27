import { createContext, useContext } from "react";

export interface UserContextData {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  points: number;
  dailyStreak: number;
  refreshUser: () => Promise<void>;
}

export const UserContext = createContext<UserContextData | null>(null);

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserContext.Provider");
  }
  return context;
}